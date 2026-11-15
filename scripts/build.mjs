import {cp,mkdir,rm,copyFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});await copyFile('index.html','dist/index.html');for(const file of ['app.js','data.js','styles.css'])await copyFile('src/'+file,'dist/'+file);console.log('Build concluído: dist/');
