/* TITLE
Extract the domain name from a URL

URL


INSTRUCTIONS


EXAMPLES


*/
function domainName(url){
  //find & remove protocol (http, ftp, etc.) and get domain
    url = url.replace('http://', "")
    url = url.replace('https://', "")
    url = url.replace('www.', "")
    return url.split('.')[0]
    }