---
sidebar_position: 1
---

# Output Statistics Facet

Example:

```json
{
    ...
    "inputs": {
        "outputFacets": {
            "outputStatistics": {
                "_producer": "https://some.producer.com/version/1.0",
                "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json",
                "rowCount": 123,
                "size": 35602
            }
        }
    }
    ...
}
```
The facet specification can be found [here](https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json).