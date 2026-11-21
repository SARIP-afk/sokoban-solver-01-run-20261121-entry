import*as f from'node:fs';
let{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
for(let d of f.readdirSync(I)){f.mkdirSync(O+'/'+d,{recursive:!0});let t=f.readFileSync(I+'/'+d+'/level.txt')+'';
let w=t.search('\n'),G=[],B=[],p,W=[...t].map((c,j)=>(c>'%'&&c<'/'&&G.push(j),c=='$'|c=='*'&&B.push(j),c=='@'|c=='+'&&(p=j),c=='#'));
let F=[-w-1,w+1,-1,1],u=G.map(g=>(W[g]=3,g));for(let x of u)for(let d of F){let y=x-d;if(!W[y]&W[y-d]!=1)W[y]=2,u.push(y);}
let P=[],M=[];for(let s of u)if(!P[s]){let q=[s],r={b:[],g:[],n:M.length};P[s]=r;M.push(r);for(let x of q)for(let d of F){let z=x+d;if(W[z]>=2&&!P[z])P[z]=r,q.push(z);}}
B.forEach(b=>P[b].b.push(b));G.forEach(g=>P[g].g.push(g));
let m='';for(let i in M){let b=M[i].b,X=[...W];for(let s of u)if(P[s].n!=i&&(P[s].n>i||W[s]>2))X[s]=1;
let A=[[p,b]],C=[],D={[p+','+b]:1},o=1;while(A[0]||C[0]){if(!A[0])A=C,C=[];let[q,z]=A.pop(),k=q+','+z;if(z==''+M[i].g){let r='',e;while((e=D[k])[0])r='udlrUDLR'[e[1]]+r,k=e[0];m+=r;p=q;o=0;break;}
for(let n=4;n--;){let d=F[n],y=q+d;if(X[y]==1)continue;let x=z.indexOf(y),nb=z;if(x>=0){let e=y+d;if(z.includes(e)|X[e]<2)continue;nb=[...z];nb[x]=e;nb.sort((a,b)=>a-b);}let j=y+','+nb;if(D[j])continue;D[j]=[k,n+4*(x>=0)];(x>=0?C:A).push([y,nb]);}}
if(o){m='';break}}f.writeFileSync(O+'/'+d+'/solution.txt',m);}
