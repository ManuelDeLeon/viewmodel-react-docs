cd node_modules\viewmodel-react-plugin
call babel --presets es2015 --out-dir dist src
cd  ..\..
cd node_modules\viewmodel-react
call babel --presets es2015 --out-dir dist src
cd  ..\..
call rimraf out_pre out
mkdir out_pre
xcopy src\*.js out_pre /q/e/i
node replacePreCode.js
call babel --presets react --out-dir out out_pre
