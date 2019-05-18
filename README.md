# ipfs-example
😊Let's IPFS! GOda~ Goda~

## Pre install 
### MAC
1. Brew 설치하기

        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    (Brew 가 있다면 안해도됨)

    (만약 Xcode 관련 에러가 뜬다면 ` xcode-select --install` 를 입력하고, 설치한다)

2. GIT/NPM/NODE/ipfs-js 설치하기

        brew install git
        brew install ipfs
[node 다운로드](https://nodejs.org/dist/v10.15.3/node-v10.15.3.pkg)

다운로드를 클릭해서 node 를 설치한다


3. 깃 클론하기

        git clone https://github.com/cokia/ipfs-example


npm audit fix --force

npm install

---
### Ubuntu
1. GIT/NPM/NODE/IPFS 설치하기

                sudo apt-get update
                sudo apt-get install 
                cd ~
                sudo apt-get install git
                golang-go -y
                wget https://dist.ipfs.io/go-ipfs/v0.4.10/go-ipfs_v0.4.10_linux-386.tar.gz
                tar xvfz go-ipfs_v0.4.10_linux-386.tar.gz
                sudo mv go-ipfs/ipfs /usr/local/bin/ipfs

## issue
 error: use of undeclared identifier 'uint64_t' 관련 에러가 `npm install`중에 뜬다

 - Node 버전이 너무 높아서 그렇다. 10 버전대가 제일 안정적이라고 알려져있으니 그버전으로 다운그레이드 해보자. 


 Module not found: Can't resolve 'eth-lib/src/hash' in '/Users/XXX/dev/balance-manager/node_modules/web3/packages/web3-utils/src'

 - Web3 버전이 낮아서 그렇다. `npm uninstall web3` 한다음에 `npm install -g web3` 으로 혼내주자(???)


 
