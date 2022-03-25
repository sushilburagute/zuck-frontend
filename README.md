# Todo

## /food

1. Hero Images
1. Pagination

## Misc

1. Razorpay int
1. g-analytics int
1. Better error handling on API calls
1. Throw toasts everywhere

Disable fetching if token not present

```typescript
const isAutoFetching = false;
const { isLoading, error, data } = useQuery(
  "repoData",
  () => fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json()),
  { enabled: isAutoFetching }
);
```

# Known Bugs

1. fetched data takes some time to onload in favs and cart page
