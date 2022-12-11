# ootd
### Tech Stacks
* Next.js + Typescript
* FastAPI

### Getting Started
* frontend
  ```bash
  cd frontend
  npm install  # 처음 실행 시 설치
  npm run dev
  ```
* Backend
  ```bash
  cd backend
  uvicorn app.main:app --reload --host=0.0.0.0 --port=8000
  ```
  * 실행 후 `http://[host]:[port]/[route설정]`에 접속하여 값 확인
  * 문서가 필요할 경우 `/docs`로 접속
    * localhost에서 port가 8000으로 설정되어 있다면 `http://localhost:8000/docs`로 접속해서 확인