cd node_modules\viewmodel-react-compiler
call babel --presets es2015 --out-dir dist src
cd  ..\..
cd node_modules\viewmodel-react
call babel --presets es2015 --out-dir dist src
cd  ..\..
rem call babel --plugins vmc2jsx --presets es2015,react --out-dir out src
rem cd ..
rem cd viewmodel-react-docs
rd /q/s out
rd /q/s out_pre
mkdir out_pre
xcopy src\*.js out_pre /q/e/h/i
node replacePreCode.js
call babel --presets react --out-dir out out_pre