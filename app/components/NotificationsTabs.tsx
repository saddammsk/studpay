import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Link from 'next/link'

const categories = [
      {
            name: 'All',
            number: '9',
            posts: [
                  {
                        id: 1,
                        title: 'Does drinking coffee make you smarter?',
                        date: '5h ago',
                        commentCount: 5,
                        shareCount: 2,
                  },
                  {
                        id: 2,
                        title: "So you've bought coffee... now what?",
                        date: '2h ago',
                        commentCount: 3,
                        shareCount: 2,
                  },
            ],
      },
      {
            name: 'Applications',
            number: '3',
            posts: [
                  {
                        id: 1,
                        title: 'Is tech making coffee better or worse?',
                        date: 'Jan 7',
                        commentCount: 29,
                        shareCount: 16,
                  },
                  {
                        id: 2,
                        title: 'The most innovative things happening in coffee',
                        date: 'Mar 19',
                        commentCount: 24,
                        shareCount: 12,
                  },
            ],
      },
      {
            name: 'Leases',
            number: '3',
            posts: [
                  {
                        id: 1,
                        title: 'Ask Me Anything: 10 answers to your questions about coffee',
                        date: '2d ago',
                        commentCount: 9,
                        shareCount: 5,
                  },
                  {
                        id: 2,
                        title: "The worst advice we've ever heard about coffee",
                        date: '4d ago',
                        commentCount: 1,
                        shareCount: 2,
                  },
            ],
      },
      {
            name: 'Payments',
            number: '3',
            posts: [
                  {
                        id: 1,
                        title: 'Ask Me Anything: 10 answers to your questions about coffee',
                        date: '2d ago',
                        commentCount: 9,
                        shareCount: 5,
                  },
                  {
                        id: 2,
                        title: "The worst advice we've ever heard about coffee",
                        date: '4d ago',
                        commentCount: 1,
                        shareCount: 2,
                  },
            ],
      },
]

export default function Example() {
      return (
            <div className="w-full">
                  <TabGroup>
                        <TabList className="flex items-center gap-1 bg-blue-1300 rounded-xl p-1">
                              {categories.map(({ name, number }) => (
                                    <Tab
                                          key={name}
                                          className="cursor-pointer flex items-center text-sm font-normal py-2 px-4 font-inter text-gray24 gap-2 rounded-[10px] focus:not-data-focus:outline-none data-focus:outline data-focu:outsline-no none data-hover:bg-white data-selected:bg-white data-selected:text-black-1100 data-selected:data-hover:bg-white"
                                    >
                                          {name}
                                          {number && (
                                                <span className="flex items-center justify-center bg-gray25 text-xs text-gray24 w-[21.31px] h-[21.31px] rounded-full data-hover:bg-white">({number})</span>
                                          )}
                                    </Tab>
                              ))}
                        </TabList>
                        <TabPanels className="mt-3">
                              {categories.map(({ name, posts }) => (
                                    <TabPanel key={name} className="rounded-xl p-3">
                                          <ul>
                                                {posts.map((post) => (
                                                      <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-red/5">
                                                            <Link href="/" className="font-semibold text-red">
                                                                  <span className="absolute inset-0" />
                                                                  {post.title}
                                                            </Link>
                                                            <ul className="flex gap-2 text-red/50" aria-hidden="true">
                                                                  <li>{post.date}</li>
                                                                  <li aria-hidden="true">&middot;</li>
                                                                  <li>{post.commentCount} comments</li>
                                                                  <li aria-hidden="true">&middot;</li>
                                                                  <li>{post.shareCount} shares</li>
                                                            </ul>
                                                      </li>
                                                ))}
                                          </ul>
                                    </TabPanel>
                              ))}
                        </TabPanels>
                  </TabGroup>
            </div>
      )
}