# IPFS-EXAMPLE for ETHCON KOREA 2019

## IPFS 설치하기

windows : 
1. https://golang.org 에 가서 go를 다운로드 받고 설치한다.
2. https://dist.ipfs.io/#go-ipfs 에 가서 다운로드 받는다.
3. 압축을 풀고, 받은 파일을 압축을 푼다 
4: `setx path "%PATH%;파일을 받은 경로"` 를 CMD에 입력한다

(보통 `c:\user\사용자이름\downloads\go-ipfs_v0.4.20_windows-amd64` 입니다.)

MAC : 
1. 의존 라이브러리 설치하기
`xcode-select --install`

2.Brew 설치하기
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
이외에 시키는 명령어가 있다면 따라서 쳐주세요!

3. IPFS 설치하기
`brew install ipfs`

ubuntu : 
1. `sudo apt-get install golang-go -y`
2. `sudo snap install ipfs`


## IPFS 데몬 실행하기 

그전에 초기화 명령어인 init 먼저..!
`ipfs init`

그리고 데몬 실행 명령어
`ipfs daemon`

을 하면 데몬이 자동으로 실행된다.
크롬이나 브라우저를 켜고 
"http://localhost:5001" 로 가면 web-ui 가 보입니다..!

## ipfs에 파일 업로드 하기
`ipfs add 올릴파일이름.확장자`

## ipfs에서 파일 다운로드 받기
`ipfs get 해시`


