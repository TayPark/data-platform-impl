## 1단계

> 상황: 데이터 기반의 의사결정을 위해 데이터 분석이 필요한 상황. 데이터 분석할 도구가 없어 도입 시급.

**프로덕션 서비스 DB, 로그 스토리지의 데이터를 일일 배치 처리로 가공된 데이터를 조회할 수 있도록 인프라 구축**

- 일일/시간별 배치를 통해 데이터를 가공하여 제공
  - 분석용도로 더 적절한 데이터 포맷으로 데이터 가공
    - 서비스 DB는 MySQL / 로그 DB는 MongoDB에 적재하는 것으로 가정
    - ETL 엔진은 Spark or Flink
    - DB 데이터를 가져오기 위해 Data extraction? copy? tool 필요
  - Airflow / Prefect 도입
- 데이터 분석 엔진 도입
  - EDA 클러스터 구축(Trino)

[x] WAS 셋업
  [x] WAS log pipeline
  [x] Kafka (kSQL?)
