export default function App(): JSX.Element {
    return (
        <div className="w-screen h-screen p-20">
            <h1 className="mx-auto w-fit text-4xl">GLD Minimal Template</h1>
            <ul className=" list-disc mt-10 mx-auto w-fit">
                <li>Vite & SWC</li>
                <li>React & TypeScript</li>
                <li>TailwindCSS</li>
                <li>Prettier & Eslint (with Airbnb style)</li>
                <li>Husky & Lint-Staged</li>
            </ul>
        </div>
    );
}
