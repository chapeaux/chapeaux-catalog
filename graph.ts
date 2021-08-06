type SPARQLValue {
    type:string;
    value: string;
    datatype?:string;
    lang?:string;
}

type SPARQLHead {
    vars : Array<string>;
    link? : Array<string>;
}

class SPARQLResult {
    head:SPARQLHead
    bindings: Array<{string,SPARQLValue}>
}
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


fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/query', {
    headers: { 
        'Content-Type':'application/sparql-query',
        'Accept':'application/sparql-results+json'
    },
    body:'PREFIX cpxs: <http://chapeaux.io/schemas/> SELECT * WHERE { ?s ?p ?o }',method:'POST'
}).then(resp=>console.log(resp));
*/

/*
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
*/

// const results = await fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/query', {
//     headers: { 
//         'Content-Type':'application/sparql-query',
//         'Accept':'application/sparql-results+json'
//     },
//     body:'PREFIX cpxs: <http://chapeaux.io/schemas/> SELECT * WHERE { ?s a cpxs:WebComponent }',
//     method:'POST'
// });

const results = await fetch('http://oxigraph-ldary24-dev.apps.sandbox.x8i5.p1.openshiftapps.com/update', {
    headers: { 
        'Content-Type':'application/sparql-update'
    },
    body:`PREFIX cpx: <http://chapeaux.io/vocabulary/> 
    PREFIX cpxs: <http://chapeaux.io/schemas/> 
    INSERT DATA { 
        cpx:CPXAuth a cpxs:WebComponent 
    }`,
    method:'POST'
});
// const txt = await results.text();
// console.log('Text',txt);
// const jsonresp = await results.json();
// console.log(jsonresp);