import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = ['https://www.amazon.com/Rustproof-Toothbrush-No-Drilling-Organizers-Accessories/dp/B0GFCW85CK?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=2602570b205eca5da3b91702cccf3a12&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sakugi-Corner-Shower-Caddy-Space-Saving/dp/B0CMJ8H7ZD?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=0378cf9e82644f404b6a7f4abcdab831&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NESOMI-Adhesive-Organizer-Rustproof-Stainless/dp/B0CPPVH7KF?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=24e31f40e28690fd89369a4993cd5053&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HAMITOR-Corner-Shower-Caddy-Tension/dp/B0DSBM7RQL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=3cec79be104eb1ca722352755489d2fc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TAILI-Suction-Organizer-Bathroom-Drilling/dp/B0D1C6J36J?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=453e12398c71d6202302d2bd74e87be5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YASONIC-Adhesive-Organizers-Removable-Wall-Mounted/dp/B0CXT9YZ24?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=da2cea1f5e1b2dca0ee66e6414e7abf4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HAMITOR-Shower-Caddy-Tension-Pole/dp/B0GZZ3VM69?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=7778cb02e63b987a849bc4fa6af6da80&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SEIRIONE-Bathroom-Rustproof-Stainless-Adjustable/dp/B07XLLLFBB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=406f8560f9a4128ad29360258a45e7a8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rustproof-Organizer-Organizers-Storage-Black/dp/B0FVF5QQDY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=612ff1410182551635a9807d1fb0bff5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YASONIC-Adhesive-Organizers-Removable-Wall-Mounted/dp/B0D1BZJSX4?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=5c71744b00bb7ab51efed5e50b6c9d31&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Asayuee-Organizer-Cosmetics-Organizers-Countertop/dp/B0C42YJVCD?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e407b301a41bd68cae88cdda431ec4a9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Detachable-Toothbrush-Toothpaste-Countertop-Accessories/dp/B0F1MY38VR?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=be9aaae23ba39733f4d5d8afb6456619&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rotating-Organizer-Adjustable-Multi-Function-Countertop/dp/B0BR9V9FKP?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=36de6bd49b7de701c80aed6e48c30064&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Drawers-Tier-Makeup-Organizer-Versatile/dp/B0DJ8BKK8V?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=66bdf381c792f905bb564e5137ae8a89&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Makeup-Organizer-Cosmetic-Bathroom-Countertop/dp/B0DG27JTRS?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=f72fdae81b583be67d5ff7d6182b4d04&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Jesginboo-Bathroom-Organizer-Countertop-Organizers/dp/B0DMNK7BBX?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=35e9250411e705ff4e70b2afc2e26f04&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HBlife-Organizer-Countertop-Lipsticks-Eyeshadow/dp/B0DQ378K28?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=a06efb58cb00ec799b91cbae0999d67e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Pajiriona-Organizer-Skincare-Cosmetic-Countertop/dp/B0D8KWGK5X?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=ee279261855d085e5a00535f731175a2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Organizer-Vtopmart-Organizers-Container-Organization/dp/B0BZNPDHR9?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=fd02694387115cd7ec4a0ace47525046&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ukeetap-Multi-Purpose-Pull-Out-Organizers-Bathroom/dp/B0DNTQ2YNT?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=8d036ad8670df9a9c256addf08837fe5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Multi-Purpose-Countertop-Organizers-Stackable-Organization/dp/B0BNQ56MH5?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e5ed9e78adb2e1001820f0d5d6c49876&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/REALINN-Organizer-Cabinet-Storage-Bathroom/dp/B0CFQDSSYB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=973c3a97cc9c853d0d0397aba403501e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vtopmart-Stackable-Organizers-Undersink-organization/dp/B0BZCTXKPZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=04a887a0435db5dda6057472ca7d925d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Under-Sink-Organizer-Organizers-Organization/dp/B0CHNL1JYB?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=69f64b48f96e386441cd4bc0b327eb8b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/DEKAVA-Pack%EF%BC%8CBathroom-Organizer%EF%BC%8C2-Multi-Purpose-Collection/dp/B0B3JJYJSS?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=7540156be947917bbbc6ff18234d4244&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sevenblue-Organizer-Multi-Use-Organizers-Bathroom/dp/B0CBDF4SMK?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d3211af2da3872b28ff2acb2d1df8a06&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PXRACK-Under-Sink-Organizer-Adjustable/dp/B0D176VGXZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=e78c0df3e962a70192320df62831a447&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sevenblue-Organizer-Adjustable-organizer-Multi-Purpose/dp/B0DDKSX2CW?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=9c9af5df15c1e36410a2fa7a51f53e7e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OLANLY-Bathroom-Absorbent-Chenille-Non-Slip/dp/B0CFGYFCYL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=895e6363b359c492b535dcdc022f9af1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gorilla-Grip-Bathroom-Rug-Mat/dp/B07FPQZG6V?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=f39b3356a2b288336f9457635ddc6b1c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OLANLY-Bathroom-Absorbent-Microfiber-Non-Slip/dp/B0CBP8CL71?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=37094c90c2cea0dadbf28e48261dc7c5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Extra-Chenille-Striped-Pattern-Bathroom/dp/B09Y116MJP?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=1ab8e712192a7e8a752568c59d872656&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bosap-Rubber-Bathroom-Washable-Absorbent/dp/B0CGDLK8JY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=6f54922a6c68023178b33425ee79c21e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Smiry-Absorbent-Bathroom-Washable-Accessories/dp/B0G31YQW46?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=c4be16c77597a75d02c7fa76f0c9b518&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OLANLY-Absorbent-Bathroom-Washable-Accessories/dp/B0FJRQC5LZ?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=14def9fd4788c0054d83d1681ff38847&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MontVoo-Bath-Innovative-Bathroom-Absorbent-Resistant/dp/B0BR3F4HFX?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=dff711de04be0098251c82f28ef40a33&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OLANLY-Bathroom-Absorbent-Chenille-Accessories/dp/B0FQNL2QN5?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=325392c6c55ef1c41f4dd25ae17413ee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ILANGO-Microfiber-Bathroom-Absorbent-Washable/dp/B0BQRRVMRY?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d283fd0df8fdc05b2fa6073d53271f7f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Feather-Stitch-Bathroom-Absorbent-Washable/dp/B0DVQ9Z2MM?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=03822996de3c3dfd753e60ef392a6c9f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GFWARE-Toothbrush-Bathrooms-Toothpaste-Countertop/dp/B0BFGNSXYL?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=8450bb7c7da903962f99d54fa7a3e379&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bitvae-Bathroom-Toothbrush-Wall-Mounted-Toothbrushes/dp/B0F3JGLLB8?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=71809245b2c7f4823905c4ef1a4898da&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Detachable-Toothbrush-Toothpaste-Countertop-Accessories/dp/B0F1MY38VR?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=dac9eee994817154d9069667127b7596&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Urbanstrive-Stainless-Toothbrush-Toothpaste-Accessories/dp/B08P4ZZTNG?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=2df54a8b71947721830aac280df6fe10&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GFWARE-Bathroom-Organizers-Storage-Organization/dp/B0D62VC617?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=d8af3d7ef0a52a1d9955c5e68fbc6876&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Toothbrush-Bathrooms-Toothpaste-Organizer-Toothbrushes/dp/B0B8VG753F?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=1b251fa5ecdf5299cb80083c51062a1e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Boperzi-Toothbrush-Toothpaste-Countertop-Freestanding/dp/B09TVMB6DM?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=32e88a2de5fbf734f255a74126641e91&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JASAI-Dispenser-Stainless-Refillable-Bathroom/dp/B0B5TYRW23?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=47d4f85e47bb57a8dd4b8970b0de30f2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dispenser-Bathroom-Kitchen-Farmhouse-Striped/dp/B0C994176Z?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=51fc069ee8b58781059080271bacedb2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JASAI-Dispenser-Refillable-Kitchen-Bathroom/dp/B0DH52T8F8?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=138d75fce2316dc92d8f3a04cf7d7299&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dispenser-Waterproof-Bathroom-Plastic-Kitchen/dp/B09J24RW5F?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=0dea06f3d999f025c960da6bf802d464&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Automatic-Dispenser-Touchless-Rechargeable-Adjustable/dp/B0F5311G47?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=21d8ece5854d6e163a9749d1e1e1b4bc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/simplehuman-Touch-Free-Automatic-Rechargeable-Stainless/dp/B0CVNGWWX6?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=85e0e33f4698d8f34a4fd7922a3c8b01&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Aunmaon-Automatic-Hands-Free-Adjustable-Compatible/dp/B0DN4TDRYV?th=1&linkCode=ll2&tag=bathgridedge-20&linkId=3041d10bf4ba121d35a8d8cddf2f9779&language=en_US&ref_=as_li_ss_tl',]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'grid'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

