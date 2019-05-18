# IPFS-EXAMPLE for ETHCON KOREA 2019

## IPFS 설치하기
---
### 방법 1 : 나는 편한게 최고다 

---
windows : 
1. https://dist.ipfs.io/#go-ipfs 에 가서 다운로드 받는다.
2. 압축을 풀고, 받은 파일을 압축을 풀고 CMD 를 실행해서 해당 파일을 받은 그 경로로 간다.
(cmd 를 실행하고 , `cd Downloads` , `cd 폴더이름` 하면된다)
---
MAC : 
1. https://dist.ipfs.io/#go-ipfs 에 가서 다운로드 받는다.
2. 압축을 풀고, CMD 를 실행해서 해당 다운로드 받은 파일을 압축을 풀고(`unzip 파일이름`) 그 경로로 간다.
---
Linux : 
1. https://dist.ipfs.io/#go-ipfs 에 가서 다운로드 받는다.
2. 압축을 풀고, 터미널 를 실행해서 해당 다운로드 받은 파일을 압축을 풀고(`unzip 파일이름`) 그 경로로 간다.
---

### 방법 2 : 나는 터미널이 좋다! 
---

MAC : 
1. 의존 라이브러리 설치하기
`xcode-select --install`

2.Brew 설치하기
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
이외에 시키는 명령어가 있다면 따라서 쳐주세요!

3. IPFS 설치하기
`brew install ipfs`
---
ubuntu : 
1. ipfs 설치하기
`sudo apt-get install ipfs`
---

## IPFS 데몬 실행하기 
(윈도우의 경우 ipfs.exe가 있는 해당경로에 있다는 가정하에 진행합니다)

`ipfs daemon`

을 하면 데몬이 자동으로 실행된다.
크롬이나 브라우저를 켜고 
"http://localhost:5001" 로 가면 web-ui 가 보입니다..!
