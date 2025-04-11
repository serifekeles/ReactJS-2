// Asal sayı mı kontrolü
const isAsal = (num: number): boolean => {
    if (num < 2) return false;
    for (let i: number = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  // 1'den n'e kadar asal sayılar
  const getAsalSayilar = (n: number): number[] => {
    const asallar: number[] = [];
    for (let i: number = 2; i <= n; i++) {
      if (isAsal(i)) asallar.push(i);
    }
    return asallar;
  };
  
  // En küçük ortak kat hesaplama
  const enKucukOrtakKat = (n: number): {result:number,sure:number} => {
    const start = new Date();
    const asallar: number[] = getAsalSayilar(n);
    console.log({ asallar });
  
    let result: number = 1;
  
    asallar.forEach((asal: number) => {
      let kuvvet: number = asal;
      let kuvvetSayisi: number = 1;
  
      // asal sayının en büyük kuvvetini bul (asal^k <= n)
      while (kuvvet * asal <= n) {
        kuvvetSayisi++;
        kuvvet *= asal;
      }
  
      console.log(`Asal: ${asal}, Kuvvet Sayısı: ${kuvvetSayisi}, Kuvvet: ${kuvvet}`);
      result *= kuvvet;
    });
    const end = new Date();
    const sure = end.getTime() - start.getTime();
    return {result,sure};
  };
  
  console.log("Sonuç:", enKucukOrtakKat(20)); 