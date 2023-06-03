class SmallestIntegerFinder {
    findSmallestInt(args) {
      let arr = args.sort((a,b) => (a-b));
      console.log(arr[0])
      return arr[0]
    }
  }
new SmallestIntegerFinder().findSmallestInt([34, 15, 88, 2])