# ipfs-example
😊Let's IPFS! GOda~ Goda~

## Pre install 
### MAC OS (OSX)
1. Brew 설치
	```sh
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	```
	- Brew 가 이미 설치되어 있을 경우, 해당 과정은 넘어가셔도 무방합니다.
	- 만약 `Xcode`와 관련된 에러가 발생할 경우 `xcode-select --install`를 입력하신 뒤, 재시도해보세요.

2. GIT & IPFS 설치
	```sh
	brew install git # GIT 설치
	brew install ipfs # IPFS 설치
	```
3. NODE.JS & NPM 설치
	[NODE.JS 설치](https://nodejs.org/) 에서 LTS 버전 패키지를 설치하여 주세요.

3. 프로젝트 클론
	```sh
	git clone https://github.com/cokia/ipfs-example
	```

4. 실행하기 
	```sh
	npm audit fix --force
	npm install
	```

---
### UBUNTU
1. GIT & NODE.JS & NPM & IPFS 설치
	```sh
	sudo apt-get update # APT 업데이트
	sudo apt-get install git # GIT 설치
	sudo apt-get install golang-go -y # GOLANG 설치
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - # NODE.JS 리포 설치
	sudo apt-get install -y nodejs # NODE.JS & NPM 설치
	sudo snap install ipfs # IPFS 설치
	```

2. 프로젝트 클론
	```sh
	git clone https://github.com/cokia/ipfs-example
	```

3. 실행하기 
	```sh
	npm audit fix --force
	npm install
	```

## ISSUE
 error: use of undeclared identifier 'uint64_t' 관련 에러가 `npm install`중에 뜰 경우,
 - 아직 안정화가 되지 않는 버전이기에 발생하는 현상이므로, LTS 버전으로 진행하세요.


 Module not found: Can't resolve 'eth-lib/src/hash' in '/Users/XXX/dev/balance-manager/node_modules/web3/packages/web3-utils/src'

 - Web 버전이 낮아서 발생하는 문제이므로, `npm uninstall web3` 를 진행하여 완전히 패키지를 제거한 후,
 `npm install -g web3` 입력을 통하여 최신 버전 패키지를 설치하여 주세요.
