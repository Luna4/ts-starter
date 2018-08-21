const fs = require('fs');
const path = require('path');
const glob = require('glob');

glob.sync('*', { cwd: 'node_modules/date-fns/locale' }).forEach(name => {
    if (name === '_lib' || name === 'package.json') return;
    const filename = path.resolve('src/date-locales', `${name}.js`);

    const content = `const ${name} = require('date-fns/locale/${name}'); 
(window as any).date.locales = { ${name} };`;

    fs.writeFileSync(filename, content, 'utf8');
    console.log(`${filename} ok`);
})