"""Import the already-public media once; verify existing files on every build."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import time
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'scripts/media-manifest.json').read_text())
PUBLIC = ROOT / 'public'


def restore(entry):
    relative = Path(entry['path'])
    if relative.is_absolute() or '..' in relative.parts:
        raise ValueError('Invalid media path')
    destination = PUBLIC / relative

    def valid(data):
        return len(data) == entry['size'] and hashlib.sha256(data).hexdigest() == entry['sha256']

    if destination.is_file():
        if not valid(destination.read_bytes()):
            raise ValueError(f'Asset changed without manifest update: {relative}')
        return False
    url = manifest['origin'] + '/' + urllib.parse.quote(entry['path'], safe='/')
    for attempt in range(4):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'Jinqiu-Guo-Portfolio-Migration'})
            with urllib.request.urlopen(request, timeout=120) as response:
                data = response.read()
            if not valid(data):
                raise ValueError(f'Integrity check failed: {relative}')
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(data)
            return True
        except Exception:
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)


with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
    imported = sum(executor.map(restore, manifest['files']))
print(f'Verified {len(manifest["files"])} assets; imported {imported}.')
