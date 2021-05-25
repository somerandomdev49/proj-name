const ConsonantsPreferred = "mnhbwpt";
const ConsonantsProbMap = [1, 1, 1, 1, 1, 1, 0.4];
const VowelsPreferred = "euo";
const VowelsProbMap = [1, 1];

const DefaultLetterProb = 0.1;
const ConsonantSeqProb = 0.2;
const Consonants = "qwrtpsdfghjklzxcvbnm";
const Vowels = "euyioa";
const Consonant = (x: string) => Consonants.includes(x);
const Vowel = (x: string) => Vowels.includes(x);

const choice = <X, Y>(prob: number, a: () => X, b: () => Y): X | Y =>
    Math.random() < prob ? a() : b();

const isNextConsonant = () => choice(ConsonantSeqProb, () => true, () => false);

const randomFrom = <T>(x: T[]): T =>
    x[Math.floor(Math.random() * x.length)];

const randomStringFrom = (x: string): string =>
    x[Math.floor(Math.random() * x.length)];

const randomConsonant = (): string => choice(DefaultLetterProb,
        () => randomStringFrom(Consonants),
        () => randomStringFrom(ConsonantsPreferred))

const randomVowel = (): string => choice(DefaultLetterProb,
    () => randomStringFrom(Vowels),
    () => randomStringFrom(VowelsPreferred))

const randomLetter = (): string =>
    randomFrom([ randomVowel, randomConsonant ])();

const nextLetter = (prev: string): string =>
    prev == ''
    ? randomLetter()
    : Consonant(prev)
        ? isNextConsonant()
            ? randomConsonant()
            : randomVowel()
        : randomConsonant()

const length = Deno.args.length ? Number.parseInt(Deno.args[0]) : 4;
const text = `[ ${length} ]`;
console.log('    ' + text);
let s = "";
for(let i = 0; i < length; i++)
    s += nextLetter(s[s.length - 1]);
console.log(' '.repeat((text.length - length) / 2 + 4) + s);
