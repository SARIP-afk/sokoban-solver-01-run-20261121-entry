import f from'fs';
let{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;
f.readdirSync(I).forEach(d=>{let o=O+'/'+d;f.mkdirSync(o);let t=f.readFileSync(I+'/'+d+'/level.txt')+'',w=t.search('\n'),G=[],B=[],p,W=[...t].map((c,j)=>(c>'%'&c<'/'&&G.push(j),c=='$'|c=='*'&&B.push(j),c=='@'|c=='+'&&(p=j),c=='#')),m='',F=[-w-1,w+1,-1,1],P=[],L=[],H=p-p%(w+1),u=G.map(g=>(L[g]=2,g));
for(let x of u)for(let d of F)if(!L[x-d]&W[x-2*d]==0)L[x-d]=1,u.push(x-d);
for(let g of G)if(!P[g]){let q=[g];P[g]=g;for(let x of q)for(let d of F){let y=x+d;if(!P[y]&!W[y]&(y<H|y>=H+w))P[y]=g,q.push(y)}
let b=B.filter(x=>P[x]==g),h=G.filter(x=>P[x]==g),A=[[p,b,'']],Q=[],D={[p+','+b]:1};
while(A[0]||Q[0]){if(!A[0])A=Q,Q=[];let[q,z,r]=A.pop();if(z==''+h){m+=r;p=q;break}
for(let n=4;n--;){let y=q+F[n],e=y+F[n];if(W[y]||P[y]&&P[y]^g&&(P[y]^P[p]|L[y]&2))continue;let x=z.indexOf(y),nb=z;
if(x+1){if(!L[e]|P[e]^g|z.includes(e))continue;nb=[...z];nb[x]=e;nb.sort((a,b)=>a-b)}
let k=y+','+nb;if(!D[k]){D[k]=1;(x+1?Q:A).push([y,nb,r+'udlr'[n]])}}}}
f.writeFileSync(o+'/solution.txt',m);});
