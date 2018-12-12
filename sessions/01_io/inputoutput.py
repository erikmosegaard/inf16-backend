import urllib

import urllib.request
contents = []
for i in range(10):
  print('Request', i+1)
  contents.append(urllib.request.urlopen("http://example.com/").read())


for content in contents:
  print(repr(content[:10]))
