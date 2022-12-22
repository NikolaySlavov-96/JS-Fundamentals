function primeNumberChecker(singleArgument){

    let isSearch = (singleArgument % 2 !== 0 && singleArgument % 1 == 0)

    console.log(`${isSearch ? 'true' : 'false'}`)
}

primeNumberChecker(81)