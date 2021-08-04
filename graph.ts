/* 

fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/query', {
    headers: { 
        'Content-Type':'application/sparql-query',
        'Accept':'application/sparql-results+json'
    },
    body:'SELECT * WHERE { ?s ?p ?o } LIMIT 10',method:'POST'
})
    .then(resp=>resp.json())
    .then(data=>console.log(data));

fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/store?graph=https://chapeaux.io/g', {

})

*/

import {parse} from "https://deno.land/std/flags/mod.ts";

function main(args: string[]) {
    const {
        ttlFile,
        help,
    } = parse(args);
    if (ttlFile) {
        fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/store?graph=https://chapeaux.io/g',{
            headers: {
                
            }
        });
    } else {
        console.log('No site entered');
    }
}

main(Deno.args);