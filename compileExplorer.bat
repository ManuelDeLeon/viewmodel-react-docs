cd ..\viewmodel-react-explorer
call npm run prepublish
xcopy dist c:\myfiles\react\viewmodel-react-docs\node_modules\viewmodel-react-explorer\dist /q/e/i/y
xcopy src c:\myfiles\react\viewmodel-react-docs\node_modules\viewmodel-react-explorer\src /q/e/i/y
cd ..\viewmodel-react-docs
npm start