## 1단계

> 상황: 데이터 기반의 의사결정을 위해 데이터 분석이 필요한 상황. 데이터 분석할 도구가 없어 도입 시급.

- [x] WAS
- [ ] ETL Pipeline
  - [x] WAS log pipeline /w fluentd
  - [ ] Kafka
  - [ ] kSQL
  - [ ] (Optional) ksqlDB
    - 만약 ksqlDB 로 쉬운 조회가 가능하고 kibana 에서 query 처럼 쉬운 visualize 가 가능하다면 이 루트로 적용


```s
# fluentd
$ docker-compose up --build

# WAS 컨테이너 빌드 및 실행
$ docker build -t dp-impl-was -f ./was/Dockerfile.server ./was
$ docker run --rm -d --name was -p 3000:3000 --log-driver=fluentd --log-opt fluentd-address=localhost:24224 --log-opt tag=docker.was.{{.ID}} dp-impl-was
```