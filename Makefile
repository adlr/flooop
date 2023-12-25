default: out.html

favicon.enc: favicon.svg
	#python3 -c "import urllib.parse; print(urllib.parse.quote(input()))" < $< > $@
	cat $< | tr '\n' '\r' | sed 's/%/%25/g' | sed 's/</%3C/g' | sed 's/>/%3E/g' | sed 's/"/'\''/g' | sed 's/#/%23/g' | sed 's/\r/%0A/g' > $@

out.html: script.js style.css index.html favicon.enc
	sed 's|<link rel="stylesheet" type="text/css" href="style.css">|<style>\n\n</style>|' index.html | \
	sed -e '/<style>/r style.css' | sed 's|<script src="script.js"></script>|<script>\n\n</script>|' | \
	sed -e '/<script>/r script.js' | \
	sed 's|FAVICON_HERE|FAVICON_HERE\n|' | \
	sed -e '/FAVICON_HERE/r favicon.enc' | \
	tr '\n' '\r' | sed -e 's|FAVICON_HERE\r\(.*\)"|\1"|' | tr '\r' '\n' | \
	cat > out.html
