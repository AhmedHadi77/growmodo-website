@echo off
npx -y create-next-app@latest agency-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
xcopy /E /H /Y agency-site\* .
rd /s /q agency-site
del setup.cmd
