---
sidebar_position: 5
title: Job Hierarchy
---

:::caution
This page is about Airflow's external integration that works mainly for Airflow versions <2.7.
[If you're using Airflow 2.7+, look at native Airflow OpenLineage provider documentation.](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html)
:::

## Job Hierarchy

Apache Airflow features an inherent job hierarchy: DAGs, large and independently schedulable units, comprise smaller, executable tasks.

OpenLineage reflects this structure in its Job Hierarchy model.
Upon DAG scheduling, a START event is emitted.
Subsequently, each task triggers START events at TaskInstance start and COMPLETE/FAILED events upon completion, following Airflow's task order.
Finally, upon DAG termination, a completion event (COMPLETE or FAILED) is emitted.
TaskInstance events' ParentRunFacet references the originating DAG run.