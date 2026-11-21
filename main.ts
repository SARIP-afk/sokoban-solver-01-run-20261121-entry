import*as f from'node:fs';
let e=process.env,I=e.MAKEFUN_INPUT_DIR||'/input',O=e.MAKEFUN_OUTPUT_DIR||'/output';
let S=t=>{
let r=t.trim().split('\n'),w=t.indexOf('\n'),W=new Uint8Array(w*r.length),G=[],B=[],p;
r.forEach((x,y)=>{for(let i=0;i<x.length;i++){let c=x[i],j=y*w+i;W[j]=c=='#';if('.*+'.includes(c))G.push(j);if('$*'.includes(c))B.push(j);if('@+'.includes(c))p=j;}});
let F=[-w,w,-1,1],v=new Uint8Array(W.length),u=G.map(g=>(v[g]=1,g));
for(let i=0;i<u.length;i++){let x=u[i];for(let d of F){let y=x-d;if(!W[y]&&!W[y-d]&&!v[y]){v[y]=1;u.push(y);}}}
let R=()=>{
let P=[],M=[];
for(let s of u){
if(P[s]!==undefined)continue;
let q=[s];P[s]=M.length;
for(let i=0;i<q.length;i++)for(let d of F){let t=q[i]+d;if(v[t]&&P[t]===undefined){P[t]=M.length;q.push(t);}}
M.push([q,[],[]]);}
for(let b of B)M[P[b]][1].push(b);
for(let g of G)M[P[g]][2].push(g);
return M.filter(m=>m[1].length);};
let Q=(X,g,b,p)=>{
let K=(q,z)=>z.reduce((k,x)=>k*X.length+x,q),M=new Map([[K(p,b),[0,0,0]]]),Gj=g.join();
let A=[[p,b]],C=[],c=0;
while(A.length||C.length){
if(!A.length){A=C;C=[];c++;}
let[q,z]=A.pop(),k=K(q,z);
if(M.get(k)[0]!=c)continue;
if(z.join()==Gj){let t='',j=k;while(M.get(j)[1]){let e=M.get(j);t='udlrUDLR'[e[2]]+t;j=e[1];}return[t,q];}
for(let i=0;i<4;i++){
let d=F[i],y=q+d;
if(X[y])continue;
let x=z.indexOf(y),nb=z,nc=c,li=i,arr=A;
if(x>=0){
let e2=y+d;
if(X[e2]||z.includes(e2)||!v[e2])continue;
nb=z.slice();nb[x]=e2;nb.sort((a,b)=>a-b);nc=c+1;li=i+4;arr=C;}
let j=K(y,nb);
if(M.get(j)?.[0]<=nc)continue;
M.set(j,[nc,k,li]);arr.push([y,nb]);}}
return null;};
let M=R(),m='';
for(let i=0;i<M.length;i++){let q=M[i],X=W.slice();
for(let j=0;j<M.length;j++)if(j!=i)for(let y of(j==i-1?M[j][2]:M[j][0]))X[y]=1;
let s=Q(X,q[2],q[1],p);
if(!s)return '';
m+=s[0];p=s[1];}
return m;};
for(let d of f.readdirSync(I)){let m=S(f.readFileSync(I+'/'+d+'/level.txt','utf8'));f.mkdirSync(O+'/'+d,{recursive:!0});f.writeFileSync(O+'/'+d+'/solution.txt',m+'\n');}
