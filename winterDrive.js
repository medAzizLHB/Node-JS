C=0
draw=_=>{createCanvas(W=720,W)
D=x=y=W/2
for(i=C++;i<C+160;i++){
x+=cos(noise(i*.02)*10)*5
y+=sin(noise(i*.02)*9)*2
D*=.97
line(x+D,y+D,x-D,y+D)
for(j of[-D,D]){
line(X=x+j*1*1.2,y+D/2,X,y+D)
line(X,y+D,X-j*2,y+D*1.08)
}}}
