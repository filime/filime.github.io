# Jekyll GitHub 블로그

GitHub Pages에 바로 배포할 수 있는 개인 블로그입니다. 글은 Markdown으로 작성합니다.

## 1. 내 정보로 바꾸기

`_config.yml`에서 다음 값을 수정하세요.

```yml
title: "블로그 이름"
description: "한 줄 소개"
author: "이름 또는 닉네임"
email: "이메일"
github_username: "GitHub 아이디"
url: "https://GitHub아이디.github.io"
```

`about.md`의 `YOUR_NAME`, `YOUR_EMAIL`도 수정하세요. 로고 첫 글자는 `_includes/header.html` 안의 `N`을 원하는 글자로 바꾸면 됩니다.

## 2. GitHub에 올리기

1. GitHub에서 `<GitHub아이디>.github.io`라는 **Public** 저장소를 만듭니다.
2. 이 폴더 안의 파일을 저장소 `main` 브랜치에 올립니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
4. **Actions** 탭의 배포 작업이 끝나면 `https://<GitHub아이디>.github.io`에서 확인합니다.

## 3. 새 글 쓰기

`_posts` 폴더에 `YYYY-MM-DD-영문-제목.md` 형식으로 파일을 만듭니다.

```md
---
title: "글 제목"
excerpt: "목록에 표시할 한 줄 설명"
tags:
  - 개발
  - 회고
---

여기에 Markdown으로 본문을 작성합니다.
```

파일을 GitHub에 올리면 자동으로 다시 배포됩니다. 배포에는 몇 분 정도 걸릴 수 있습니다.

## 로컬에서 미리 보기(선택)

Ruby와 Bundler를 설치한 뒤 이 폴더에서 실행합니다.

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`을 엽니다.
