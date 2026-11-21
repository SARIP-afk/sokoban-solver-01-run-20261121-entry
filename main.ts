import f from'fs';
let{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
f.readdirSync(I).forEach(d=>{f.mkdirSync(O+'/'+d);let t=f.readFileSync(I+'/'+d+'/level.txt')+'';
let w=t.search('\n'),G=[],B=[],p,W=[...t].map((c,j)=>(c>'%'&c<'/'&&G.push(j),c=='$'|c=='*'&&B.push(j),c=='@'|c=='+'&&(p=j),c=='#')),F=[-w-1,w+1,-1,1],P=[],M=[],m='',u=G.map(g=>(W[g]=3,g));for(let x of u)for(let d of F)if(!W[x-d]&W[x-2*d]!=1)W[x-d]=2,u.push(x-d);
for(let s of u)if(!P[s]){let q=[s];P[s]=M.push(0);for(let x of q)for(let d of F)if(W[x+d]>1&!P[x+d])P[x+d]=P[x],q.push(x+d);}
for(let i in M){let b=B.filter(x=>P[x]-1==i),g=G.filter(x=>P[x]-1==i),X=W.map((v,s)=>P[s]-1!=i&(P[s]-1>i||v>2)?1:v);
let A=[[p,b,'']],C=[],D={[p+','+b]:1};while(A[0]||C[0]){if(!A[0])A=C,C=[];let[q,z,r]=A.pop();if(z==''+g){m+=r;p=q;break;}
for(let n=4,y,e;n--;){y=q+F[n];if(X[y]==1)continue;let x=z.indexOf(y),nb=[...z];if(x+1){e=y+F[n];if(~z.indexOf(e)|X[e]<2)continue;nb[x]=e;nb.sort((a,b)=>a-b);}D[y+','+nb]||(D[y+','+nb]=1,(x+1?C:A).push([y,nb,r+'udlrUDLR'[n+4*!!~x]]));}}
f.writeFileSync(O+'/'+d+'/solution.txt',m);}});
