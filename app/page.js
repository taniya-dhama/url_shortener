import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"

const headingFont = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})

const heroContent = {
  title: "The best URL shortener in the Market",
  description:
    "We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener",
}

const actionButtons = [
  { label: "Try Now", href: "/shorten" },
  { label: "GitHub", href: "/github" },
]

export default function HomePage() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${headingFont.className}`}>
            {heroContent.title}
          </p>

          <p className="px-56 text-center">
            {heroContent.description}
          </p>

          <div className="flex gap-3 justify-start">
            {actionButtons.map((btn) => (
              <Link href={btn.href} key={btn.href}>
                <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                  {btn.label}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src="/vector.jpg"
            fill={true}
          />
        </div>
      </section>
    </main>
  )
}
