var nlp = require('./src/index')
// const corpus = require('nlp-corpus')
// nlp.verbose(true)
nlp.extend(require('./plugins/nouns/src'))
// nlp.extend(require('./plugins/sentences/src'))

let doc = nlp(`gun and rose`)
doc.nouns().toPlural()
doc.debug()
