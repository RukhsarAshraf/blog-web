import Image from "next/image";
import AuthorCard from "@/components/Author";
import CommentSection from "@/components/Comment";

const posts = [
    {
        id: "1",
        title: "Namal",
        image: "/images/namal.jpg",
        description: `Namal:
Namal novel ka plot ek complex matrix hai, aur isko summarize karna uske saath na-insafi hoga. Namal ki kahani mein bohot saari gehrai aur substance hai jo khubsurti se bun kar ek shandar andaaz mein bayan ki gayi hai. Yeh ek intense story hai jo brutal murders aur devious deceptions ke gird ghoomti hai.

Faris Ghazi (jo ek intelligence officer hai) par ilzam hai ke usne apne step-brother aur biwi ka qatal kiya aur apni rishtedaar Zumar Yousuf ko qatal karne ki koshish ki. Uska bhanja Saadi Yousuf uski begunahi par yaqeen karta hai aur aakhir kaar usse jail se chhudwata hai. Dusri taraf, Saadi ki phupho Zumar, jo ek district attorney bhi hai, uss hamlay mein apne kidneys kho deti hai aur yaqeen karti hai ke Faris qatil hai, aksar ek fake telephone call ki wajah se jo Zumar ko Faris ki awaaz mein attack se pehle aayi thi. Asal mujrim Hashim Kardaar (Faris ka pehla cousin) hai, jo ek accomplished lawyer hone ke ilawa ek inherited oil cartel ka malik bhi hai. Hashim ne Faris ke bhai Waris ka qatal kiya taake apne corruption cases ko chhupa sake, aur apne tracks cover karne ke liye uss scenario ko create kiya jisme Zumar ko goli lagi aur Faris ki biwi ka qatal hua.

Saadi ki chhoti behen Haneen ek super genius hai. Is novel ka ek basic theme conspiracies aur unse paida hone wali misunderstandings hai. Cunning lawyer Hashim aur uski devil maa Jawahirat ne reality ko iss tarah manipulate kiya ke log, jaise Zumar, bhi iss alternate reality ko sach maan kar misunderstandings ka shikaar ho gaye.

Novel ke tamam characters bohot ache tarah se likhe gaye hain. Genius/evil genius Haneen, caring aur sweet Saadi, brute magar honest Faris Ghazi, sharp lekin ziddi Zumar, cunning Hashim, aur envious Naushervan – har character ko depth ke saath portray kiya gaya hai. Namal ke major characters sirf black aur white mein nahi dikhaye gaye, balki grey shades mein hain, aur har character ko barabar ka exposure diya gaya hai.`,

    },

    {
        id: "2",
        title: "Peer-e-Kamil",
        description: `Peer-e-Kamil:
Umera Ahmed ka likha hua aik behtareen Urdu novel hai jo roohaniyat, khud-shinasi, aur insani jazbaat ko gehrai se chhuta hai. Is novel ke do markazi kirdar hain: Imama Hashim aur Salar Sikander. Imama, jo heroine hai, aik naik aur iman dar Ahmadi Muslim larki hai jo apne aqeeday ki wajah se samaji aur khandani dabaao ka samna karti hai. Uski zindagi ka safar iman, sabr, aur apne aqeeday par qayam rehne ki misal hai. Woh apne raste par qaim rehti hai, chahe mushkilat kuch bhi ho.

Dosri taraf, Salar Sikander, jo hero hai, aik zahi aur kamal ka shaks hai lekin roohani tor par khokhla aur be-chain hai. Uski zindagi mein maal aur dunyawi kamyaabi to hai, lekin woh apne aap ko kho chuka hai aur andheron mein bhatak raha hai. Imama aur Salar ki zindagiyan jab aapas mein milti hain, to dono hi aik doosre par gehre asrat chhodte hain. Imama ka pak iman aur roohani noor Salar ko apni zindagi ka maqsad talaash karne par majboor karta hai.

"Peer-e-Kamil" ka matlab hai "Mukammal Guru," jo is novel mein roohani hidayat aur khuda ki taraf rahnumai ki alamat hai. Umera Ahmed ne is novel ke zariye samaji rawaj, iman ki kashmakash, aur insani jazbaat ko behtareen andaaz mein pesh kiya hai. Yeh aik aisa novel hai jo dil ko chhoo jata hai aur parhne walay ko apni zindagi ko naye zawiye se dekhne par majboor karta hai.`,
        image: "/images/PEK.jpg",
    },

    {
        id: "3",
        title: "Abe Hayat",
        description: `Abe Hayat:
Umera Ahmed ki "Peer-e-Kamil" ka sequel hai jo Imama Hashim aur Salar Sikandar ke zindagi ke aglay safar ko explore karta hai. Salar aur Umama Wali ek dilchasp aur jazbaati novel hai jo mohabbat, jazbaat, aur zindagi ke rangon ko behtareen andaaz mein pesh karta hai. Is novel ka hero, jo apne andar gehrayi aur mushkilon se bhara hua hai, ek aisi shakhsiyat rakhta hai jo zindagi ke ujde hue rishton aur naakaam mohabbat se jhujh raha hai. Woh apne mazi ke saaye se nikalna chahta hai, lekin uski zindagi mein ek nayi kahani shuru hoti hai jab woh heroine se milta hai.

Heroine, jo apni khubsurti aur hosla mandi se bhari hui hai, ek strong aur independent shakhs hai. Woh apne khwabon ko poora karne ke liye kisi bhi had tak jaane ko tayyar hai. Hero aur heroine ka rishta shuru mein mushkil waqt se guzarta hai, lekin dheere-dheere woh ek doosre ki gehrayi ko samajhne lagte hain. Unka rishta sirf mohabbat tak mehdood nahi hai, balki woh ek doosre ki kamiyon ko bhi qubool karte hain aur ek doosre ko sahara dete hain.

Novel mein mohabbat ke sath sath, zindagi ke kathin haqeeqat, rishton ki kashmakash, aur apne aap ko talaashne ki kahani bhi bayan ki gayi hai. Umera Ahmed ne apne likhai se ek aisi duniya tasweer ki hai jo parhne walon ko apni gehrayi mein kheench leti hai. "Abe Hayat" ek aisi kahani hai jo dil ko chhoo jati hai aur parhne walon ko apne saath juda kar le jati hai.`,
        image: "/images/Ab.jpg",
    },

    {
        id: "4",
        title: "Yaram",
        description: `Yaram:
Ye ek dilchasp aur jazbaat se bharpoor novel hai jo mohabbat, wafa, aur zindagi ke uchaaniyo aur girahao ko bayaan karta hai. Is kahani ke markazi kirdaar Aliyan aur Amraha hain, jo do alag duniya se taluq rakhte hain, lekin taqdeer ne unhe ek doosre ke raaste mein la khada kiya. Aliyan ek khuddaar, pur-azm aur hosla mand naujawan hai jo apne sapno ko poora karne ke liye har mushkil ka samna karne ko tayyar rehta hai. Woh ek pur-asraar shakhsiyat ka maalik hai jiske gehri aankhon mein chhipi kahani har kisi ko apni taraf kheench leti hai. Dusri taraf, Amraha ek khoobsurat, zaheen aur naram dil larki hai jo apne khandaan ki mohabbat aur zimmedariyon ke bojh tale dabi hui hai. Uski masoomiyat aur ehsaas mandi har kisi ke dil ko chhoo jaati hai.

Jab Aliyan aur Amraha ki raahein milti hain, to dono ke darmiyan ek naqabil-e-faramosh rishta janam leta hai. Yeh rishta sirf mohabbat ka nahi hai, balki unki ruhon ka ek gehra rabta bhi hai. Lekin kya unki mohabbat ko muashre ke rivaj, khandani ikhtilafaat, aur zamane ki sakhtiyon ka samna karna parega? Kya Aliyan aur Amraha apni mohabbat ko saabit kar sakenge, ya phir taqdeer ke samne haar maan lenge?

"Yaram" ek aisi kahani hai jo qaari ko jazbaati utaar chadhao se guzarti hai aur mohabbat ki haqeeqi tareef karti hai. Aliyan aur Amraha ki yeh romani dastaan har dil ko chhoo jayegi aur qaari ko sochne par majboor kar degi ke mohabbat hi woh wahdi taaqat hai jo har mushkil ko aasan bana sakti hai.`,
        image: "/images/yarm.jpg",
    },

    {
        id: "5",
        title: "Bakht",
        description: `Bakht:
Mehrunnisa Shahmeer ka ek dilchasp aur jazbaati novel hai jisme pyaar, taqdeer, aur zindagi ki mushkilaat ka bayan kiya gaya hai. Is novel ke hero Umer Hayat aur heroine Haly Sultan hain, jo dono hi apne alag andaaz aur shiddat ke sath kahani ko zindagi dete hain. Umer Hayat, ek khubsurat, hoshyar, aur dilchasp shakhsiyat ka malik hai. Woh apne maqsad ke liye mehnat karta hai aur apne khandaan ki izzat ko hamesha tarjeeh deta hai. Lekin uski zindagi mein ek khali pan hai jo sirf Haly Sultan hi bhar sakti hai. Umer ka andaz thoda sakht hai, lekin uske dil mein ek naram jagah hai jo sirf Haly ke liye hai.

Haly Sultan, ek khoobsurat, samajhdaar, aur dilkash larki hai jo apne jazbaat ko samajhti hai aur apne pyaar ke liye ladna janti hai. Woh apne aap mein ek mazboot shakhsiyat ki malik hai, lekin Umer Hayat ke saamne uska dil naram ho jata hai. Haly ki zindagi mein Umer ke aane se sab kuch badal jata hai. Unka rishta sirf pyaar tak mahdood nahi hai, balke woh ek dusre ki taqat ban jate hain. Umer aur Haly ka sath sirf ek romantic story nahi hai, balke ek aisi dastaan hai jo zindagi ki har mushkil ka samna karti hai.

"Bakht" ek aisi novel hai jo pyaar, ulfat, aur jazbaat se bharpoor hai. Umer Hayat aur Haly Sultan ki kahani har dil ko chhoo jane wali hai, aur unka safar har padhne wale ko apna banata hai. Yeh novel sirf ek romantic story nahi hai, balke ek aisi dastaan hai jo aapko apne saath le kar chalegi aur aapko har lamhe mein jod kar rakh degi. Umer aur Haly ka pyaar, unki koshishen, aur unka safar aapko apni gehrayi mein le jayega. "Bakht" mein pyaar ka har rang hai, aur yeh kahani aapko apne ehsaasat se rubaru karegi.`,
        image: "/images/bakht.jpg",
    },

    {
        id: "6",
        title: "Usri Yusra",
        description: `Usri Ysra:
Husna Husain ek gehri aur pur-asar novel hai jo zindagi ke rangon, insani jazbaaton, aur taqdeer ke pech-o-kham ko bayan karti hai. Is novel ke hero Faris aur heroine Jannat hain, jo dono hi apne alag andaaz aur shiddat ke sath kahani ko zindagi dete hain. Faris, ek khubsurat, hoshyar, aur dilchasp shakhsiyat ka malik hai. Woh apne maqsad ke liye mehnat karta hai aur apne khandaan ki izzat ko hamesha tarjeeh deta hai. Lekin uski zindagi mein ek khali pan hai jo sirf Jannat hi bhar sakti hai. Faris ka andaz thoda sakht hai, lekin uske dil mein ek naram jagah hai jo sirf Jannat ke liye hai.

Jannat, ek khoobsurat, samajhdaar, aur dilkash larki hai jo apne jazbaat ko samajhti hai aur apne pyaar ke liye ladna janti hai. Woh apne aap mein ek mazboot shakhsiyat ki malik hai, lekin Faris ke saamne uska dil naram ho jata hai. Jannat ki zindagi mein Faris ke aane se sab kuch badal jata hai. Unka rishta sirf pyaar tak mahdood nahi hai, balke woh ek dusre ki taqat ban jate hain. Faris aur Jannat ka sath sirf ek romantic story nahi hai, balke ek aisi dastaan hai jo zindagi ki har mushkil ka samna karti hai.

"Usri Yusra" ek aisi novel hai jo pyaar, ulfat, aur jazbaat se bharpoor hai. Faris aur Jannat ki kahani har dil ko chhoo jane wali hai, aur unka safar har padhne wale ko apna banata hai. Yeh novel sirf ek romantic story nahi hai, balke ek aisi dastaan hai jo aapko apne saath le kar chalegi aur aapko har lamhe mein jod kar rakh degi. Faris aur Jannat ka pyaar, unki koshishen, aur unka safar aapko apni gehrayi mein le jayega. "Usri Yusra" mein pyaar ka har rang hai, aur yeh kahani aapko apne ehsaasat se rubaru karegi.`,
        image: "/images/UY.jpg",
    },
];

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found </h2>
        );
    }

    const renderParagraphs = (description: string) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className="mt-4 text-justify">
                {para.trim()}{" "}
            </p>
        ));
    };

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
                {" "}
                {post.title}{" "}
            </h1>

            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    className="w-full h-auto rounded-md mt-4"
                />
            )}

            <div className="mt-6 text-lg text-slate-700">
                {renderParagraphs(post.description)}
            </div>
            <CommentSection postId={post.id} />
            <AuthorCard />
        </div>
    );
}
