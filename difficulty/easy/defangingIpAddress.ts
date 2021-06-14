const defangIPAddr = (address: string) => [...address].map((s: string) => {
  if (s === '.') return '[.]';
  else return s;
}).join('');

console.log(`defangIpAddr Result: ${defangIPAddr('1.1.1.1')}`);

const defangIPAddrBestSolution = (address: string) => address.split('.').join('[.]');

console.log(`defangIPAddrBestSolution Result: ${defangIPAddrBestSolution('1.1.1.1')}`);
