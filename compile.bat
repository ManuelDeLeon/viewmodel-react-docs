cd ..\viewmodel-react-explorer
call npm run prepublish
xcopy dist c:\myfiles\react\viewmodel-react-docs\node_modules\viewmodel-react-explorer\dist /q/e/i/y
cd ..\viewmodel-react-docs
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
del .\out\*.test.js /S/Q
del .\out_pre\*.test.js /S/Q
