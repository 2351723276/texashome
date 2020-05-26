p=$(dirname $_)
cd $p
mv ../src/Main.ts ../Main.ts
egret build
mv ../Main.ts ../src/Main.ts