"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7230],{1335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const l={sidebar_position:2.1},s="Install and run",a={id:"running/install",title:"Install and run",description:"Requirements",source:"@site/versioned_docs/version-0.0.6/running/install.md",sourceDirName:"running",slug:"/running/install",permalink:"/starknet-devnet-rs/docs/0.0.6/running/install",draft:!1,unlisted:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet-rs/blob/master/website/versioned_docs/version-0.0.6/running/install.md",tags:[],version:"0.0.6",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1},sidebar:"docSidebar",previous:{title:"Running",permalink:"/starknet-devnet-rs/docs/0.0.6/category/running"},next:{title:"Run with Docker",permalink:"/starknet-devnet-rs/docs/0.0.6/running/docker"}},o={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Install an executable binary",id:"install-an-executable-binary",level:2},{value:"Remove Pythonic Devnet",id:"remove-pythonic-devnet",level:3},{value:"Install from crates.io",id:"install-from-cratesio",level:3},{value:"Install from GitHub",id:"install-from-github",level:3},{value:"Run the installed executable",id:"run-the-installed-executable",level:3},{value:"Fetch a pre-compiled binary executable",id:"fetch-a-pre-compiled-binary-executable",level:2},{value:"Run from source",id:"run-from-source",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"install-and-run",children:"Install and run"}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["Any of the approaches below that mention ",(0,i.jsx)(n.code,{children:"cargo"})," require you to have ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"installed Rust"}),". You might also need to install ",(0,i.jsx)(n.code,{children:"pkg-config"})," and ",(0,i.jsx)(n.code,{children:"make"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The required Rust version is specified in ",(0,i.jsx)(n.code,{children:"rust-toolchain.toml"})," in the project root and handled automatically by ",(0,i.jsx)(n.code,{children:"cargo"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"install-an-executable-binary",children:"Install an executable binary"}),"\n",(0,i.jsxs)(n.p,{children:["Installing an executable binary is achievable with ",(0,i.jsx)(n.code,{children:"cargo install"})," via ",(0,i.jsx)(n.a,{href:"https://crates.io/",children:"crates.io"})," or ",(0,i.jsx)(n.a,{href:"https://github.com",children:"github.com"}),". This approach downloads the crate, builds it in release mode and copies it to ",(0,i.jsx)(n.code,{children:"~/.cargo/bin/"}),". To avoid needing to compile and wait, check the ",(0,i.jsx)(n.a,{href:"#fetch-a-pre-compiled-binary-executable",children:"pre-compiled binary section"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"remove-pythonic-devnet",children:"Remove Pythonic Devnet"}),"\n",(0,i.jsxs)(n.p,{children:["If in the past you installed ",(0,i.jsx)(n.a,{href:"https://github.com/0xSpaceShard/starknet-devnet",children:"Pythonic Devnet"}),", be sure to remove it to avoid name collision of the old and the new executable - if by no other means, then by ",(0,i.jsx)(n.code,{children:"rm $(which starknet-devnet)"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-from-cratesio",children:"Install from crates.io"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo install starknet-devnet\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-from-github",children:"Install from GitHub"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"--locked"})," flag to ensure using the dependencies listed in ",(0,i.jsx)(n.code,{children:"Cargo.lock"})," in the project root."]}),"\n",(0,i.jsxs)(n.li,{children:["Preferably familiarize yourself with the ",(0,i.jsx)(n.code,{children:"cargo install"})," command (",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/commands/cargo-install.html#dealing-with-the-lockfile",children:"docs"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo install --git https://github.com/0xSpaceShard/starknet-devnet-rs.git --locked\n"})}),"\n",(0,i.jsx)(n.h3,{id:"run-the-installed-executable",children:"Run the installed executable"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"cargo install"})," finishes, follow the output in your terminal. If properly configured, you should be able to run Devnet with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ starknet-devnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fetch-a-pre-compiled-binary-executable",children:"Fetch a pre-compiled binary executable"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to save time and skip project compilation on installation, since Devnet v0.0.5, the Assets section of each ",(0,i.jsx)(n.a,{href:"https://github.com/0xSpaceShard/starknet-devnet-rs/releases",children:"GitHub release"})," contains a set of platform-specific pre-compiled binary executables. Extract and run with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ curl https://github.com/0xSpaceShard/starknet-devnet-rs/releases/download/<VERSION>/<COMPRESSED_ARCHIVE> | tar -xvzf -C <TARGET_DIR>\n$ <TARGET_DIR>/starknet-devnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-from-source",children:"Run from source"}),"\n",(0,i.jsxs)(n.p,{children:["To install the project from source, after ",(0,i.jsx)(n.a,{href:"https://github.com/git-guides/git-clone",children:"git-cloning"})," the ",(0,i.jsx)(n.a,{href:"https://github.com/0xSpaceShard/starknet-devnet-rs",children:"Devnet repository"}),", running the following command will install, build and start Devnet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo run\n"})}),"\n",(0,i.jsx)(n.p,{children:"Specify optional CLI params like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo run -- [ARGS]\n"})}),"\n",(0,i.jsx)(n.p,{children:"For a more optimized performance (though with a longer compilation time), run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo run --release\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);