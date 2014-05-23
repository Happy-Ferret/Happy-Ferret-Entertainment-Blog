// Adding support for multiple languages to static pages and Blogs.
// Released as public domain by Mark "Happy-Ferret" Bauermeister.

// Note: In order to display clickable flags, please add your own icons inside the img tags at the end of this script.

<script language="Javascript">
function getElementsByClass(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null )
                node = document;
        if ( tag == null )
                tag = '*';
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp('(^|\\\\s)'+searchClass+'(\\\\s|$)');
        for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(els[i].className) ) {
                        classElements[j] = els[i];
                        j++;
                }
        }
        return classElements;
}
 
function show_en() {
        var de = getElementsByClass('lang:german', null, null);
        var en = getElementsByClass('lang:english', null, null);
 
        for(i = 0; i < de.length; i++) {
                de[i].style.display = 'none';
        }
 
        for(i = 0; i < en.length; i++) {
               en[i].style.display = 'block';
        }
}
 
function show_de() {
        var de = getElementsByClass('lang:german', null, null);
        var en = getElementsByClass('lang:english', null, null);
 
        for(i = 0; i < de.length; i++) {
                de[i].style.display = 'block';
        }
 
        for(i = 0; i < en.length; i++) {
               en[i].style.display = 'none';
        }
}
 
</script>
 
 
<a href="#" onclick="show_en();"><img src="" /></a>
<a href="#" onclick="show_de();"><img src="" /></a>
