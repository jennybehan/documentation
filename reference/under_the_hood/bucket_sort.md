# Bucket sort

A [bucket sort](https://en.wikipedia.org/wiki/Bucket_sort) can be described as an ordered set of sorting `criteria`.

All the documents are sorted within the first `criterion`, then documents that can not be distinguished will be sorted using the second criterion, and so on. Thus, all documents are not sorted for every criterion, which induces a reduced compute time.

[Here is the ordered list of the default criteria used in MeiliSearch.](/learn/core_concepts/relevancy.md#ranking-rules)
