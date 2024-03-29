(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    48105: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return t(71598);
        },
      ]);
    },
    39590: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      var o = t(85893),
        n = t(28368),
        a = t(40800),
        i = t(67798);
      let r = [
        {
          question: "Is this app free?",
          answer:
            "webmind.app is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. webmind.app has premium features that can be unlocked with a one-time purchase.",
        },
        {
          question: "Where can I get an OpenAI API Key?",
          answer:
            "You can signup directly with OpenAI at https://platform.openai.com/signup",
        },
        {
          question:
            "Do I need to pay for ChatGPT Plus ($20/month) to use webmind.app?",
          answer:
            "No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAI's API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api",
        },
        {
          question: "Do I need to pay for OpenAI for a ChatGPT API Key?",
          answer:
            "Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys.",
        },
        {
          question: "How does this app work?",
          answer:
            "This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features.",
        },
        {
          question: "How is the API key handled?",
          answer:
            "Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it).",
        },
        {
          question:
            "Is it ok to give my OpenAI API Key to webmind.app? Does OpenAI allow this use case?",
          answer:
            "Yes. webmind.app only stores your API Key locally and never sends your API Key anywhere. OpenAI allows use cases where the API key is stored locally in the user's device. You can see this official response from OpenAI's staff here: https://community.openai.com/t/openais-bring-your-own-key-policy/14538/4",
        },
        {
          question: "Is my API Key encrypted in local storage?",
          answer:
            'webmind.app offers additional encryption for your API Key. You can enable encryption with a password by clicking the "OpenAI API Key" button in the sidebar and selecting "Encrypt API key...". Your API Key will be encrypted using the AES algorithm provided by the open-source CryptoJS library (https://github.com/brix/crypto-js). webmind.app only provides an encryption feature for your API key. Chat messages, prompts, AI characters, and other elements are stored using the standard local storage of your browser, which may or may not include encryption, depending on your browser. The encryption process are done entirely locally on your device, there is no backend server. If you use webmind.app on multiple devices, you will need to encrypt your API key on all of them, you can also set different passwords on different devices.',
        },
        {
          question:
            "What's the difference between ChatGPT Plus and ChatGPT API via webmind.app?",
          answer:
            "Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configured to make the AI output different messages from time to time.",
        },
        {
          question: "Can I use GPT-4 in webmind.app?",
          answer:
            "webmind.app does not give you access to the GPT-4 model automatically. If you have access to the GPT-4 model via API, you can use it on webmind.app. Note that GPT-4 API access is not the same as the ChatGPT Plus subscription. To get access to the GPT-4 API, you can sign-up for the GPT-4 API access here: https://openai.com/waitlist/gpt-4-api.",
        },
        {
          question:
            "I have ChatGPT Plus, will it cost me more to use ChatGPT API via webmind.app?",
          answer:
            "The ChatGPT API costs soooooo little you won't even notice it. Typical chat conversation is about 1000 characters, which costs ~$0.001. That's less than a cent. You can have thousands of chats and it will only costs you like $1. See official pricing here: https://openai.com/pricing#language-models",
        },
        {
          question: "How many chats can I have?",
          answer:
            "You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity.",
        },
        {
          question: "How can I sync my chat conversations across devices?",
          answer:
            "You can export the chats and import it on another device. You can also enable webmind.app Cloud for seamless syncing across devices. webmind.app Cloud is a free service provided to all webmind.app users. You can enable it by clicking the cloud icon at the bottom of the sidebar.",
        },
        {
          question: "Is it really faster than ChatGPT?",
          answer:
            "Most likely yes. From previous testings and user feedback, it is faster than the default ChatGPT in most cases, especially on long responses. Displaying the whole response instead of showing it word by word also help you to scan the response faster with your eyes. With all that said, the speed improvement is not guaranteed, your actual speed experience may varies (internet connection, API availability, etc.). Give it a try to see for yourself!",
        },
        {
          question:
            "Why does sometimes webmind.app responds differently than the default OpenAI's ChatGPT event with the same prompt?",
          answer:
            "webmind.app uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from webmind.app. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt.",
        },
        {
          question: "Can I self-host it?",
          answer:
            "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question:
            "Do I have access to the full source code if I want to self-host?",
          answer:
            "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "What can I customize in the self-host version?",
          answer:
            "As of now, you cannot customize anything. But I'm working on making it possible to set custom UI and branding soon. Stay tuned!",
        },
        {
          question: "Where can I download the macOS app?",
          answer:
            "After you make a purchase, you will receive the files and instructions in your email. You can also login to https://app.lemonsqueezy.com/my-orders/ to download the files.",
        },
        {
          question:
            "Is the macOS app a native app? How do I receive updates with the macOS app?",
          answer:
            "The macOS app is a simple native app with a webview that runs the latest version of webmind.app on your dock. It's only ~5MB in size, load super fast, and can update itself everytime you open it. You can also check for updates manually in the app's menu.",
        },
        {
          question: "Is there a Windows/Linux app?",
          answer: "Not for now. Sorry!",
        },
        {
          question: "Is there an Android/iOS/iPad app?",
          answer:
            "No, but you can add webmind.app to your home screen. It works exaclty like an app!",
        },
        {
          question: "License Key vs. API Key",
          answer:
            "License Key is used to activate the premium features of webmind.app. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features.",
        },
        {
          question: "What are the premium features?",
          answer:
            "The premium features include: Chat Search History, Access Prompt Library, Integrations, etc. Check the pricing page for the latest details of all the premium features.",
        },
        {
          question: "Is there an expiration date for the License Key?",
          answer: "The license key is valid forever.",
        },
        {
          question: "Can I receive new updates after I buy a license key?",
          answer: "Yes, all future updates are included.",
        },
        {
          question: "What are the limitations of the free plans.",
          answer:
            "In the free plan, chat history will not be saved. You will be present with a popup every few minutes. Some other features may also be limited.",
        },
        {
          question: "How many devices/users can I use the License Key on?",
          answer:
            'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use webmind.app on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key and chat history is saved locally per browser, so if you use webmind.app on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat histories, and that counts as 2 devices. If you need to use the license key on a new device but have reached the device limit, you can unlink the previous devices first using the License Manager (this is done online, access to the previous devices not needed). This device limit is put in place to avoid license key abuse and pirate.',
        },
        {
          question:
            "How do I remove a device from my license? How to access the License Manager?",
          answer:
            "At the moment, inactive devices will be revoked automatically after a short time, you don't need anything. In the future versions, you can access the License Manager from the app and manage your devices there.",
        },
        {
          question:
            "I have purchased but forget my license key, how can I get it back?",
          answer:
            "You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund.",
        },
      ];
      function l() {
        return (0, o.jsx)("div", {
          className: "",
          children: (0, o.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, o.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, o.jsx)("h2", {
                  className: "text-2xl font-bold leading-10 tracking-tight ",
                  children: "Frequently asked questions",
                }),
                (0, o.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: r.map((e) =>
                    (0, o.jsx)(
                      n.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (s) => {
                          let { open: t } = s;
                          return (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("dt", {
                                children: (0, o.jsxs)(n.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left ",
                                  children: [
                                    (0, o.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, o.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: t
                                        ? (0, o.jsx)(a, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, o.jsx)(i, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, o.jsx)(n.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, o.jsx)("p", {
                                  className:
                                    "text-base leading-7 text-gray-500",
                                  children: e.answer,
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      e.question
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    89290: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      var o = t(85893),
        n = t(28368),
        a = t(40800),
        i = t(67798);
      let r = [
        {
          question: "Can I self-host webmind.app?",
          answer:
            "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "What is self-hosting?",
          answer:
            "Self-host means you deploy the same version of webmind.app on your own web hosting server and domain name for your personal use.",
        },
        {
          question: "Why self-hosting? What are the benefits?",
          answer:
            "Some people prefer to run the software on their own server for privacy and availability reasons. For example, if webmind.app becomes inaccessible in the future, you can still access your own version of webmind.app from your server without any problem. The self-host version can also be run locally like an app.",
        },
        {
          question: "What can I customize in the self-host version?",
          answer:
            "As of now, you cannot customize anything. You the self-host version will be exactly the same as the one you are using on webmind.app. I'm working on making it possible to set custom UI and branding soon. Stay tuned!",
        },
        {
          question: "Where can I deploy my self-host version?",
          answer:
            "Anywhere! You can deploy it on your own server, or on a static web cloud service like GitHub Pages, Cloudflare Pages, AWS S3, Vercel, Netlify, Heroku, etc. You can even run it on localhost.",
        },
        {
          question:
            "Do I have access to the full source code if I want to self-host?",
          answer:
            "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "How do I receive updates for the self-host version?",
          answer:
            "As of now, you will have to manually download the latest version from the website and redeploy your app. New versions can be found as an attachment from your order page: https://app.lemonsqueezy.com/my-orders/ I'm working on making this process easier. Stay tuned!",
        },
        {
          question:
            "Do I still need a License Key and Open API Key to use the self-hosted version?",
          answer:
            "Yes. Both are needed, as the self-hosted version is exactly the same as the version you see on webmind.app. The License Key is needed in the self-host version. When you enter the license key, the app will connect to webmind.app's license server to verify your license.",
        },
        {
          question:
            "Can I let me team/community/customers use the self-host version?",
          answer:
            "You can, but keep in mind that they will also need a webmind.app License Key and OpenAI API Key in order to use it.",
        },
        {
          question:
            "Can I embed my License Key/API key to the self-host version somehow and let my team/community/customers use it?",
          answer:
            "No you can't, and you shouldn't. It's not safe to share your License Key and API Key to the public like that. The Static App Self-host version is meant for personal use. If you are looking to setup a custom deployment of webmind.app for your team/community/customers, please check out https://webmind.app/custom",
        },
        {
          question: "Can I have support on technical issues if I self-host?",
          answer:
            "Unfortunately, I cannot provide support on technical issues if you self-host. I'm working on a new offer to make the self-host process way easier. Stay tuned!",
        },
        {
          question:
            "Why don't you offer technical support for the self-hosted version?",
          answer:
            "The self-host version comes for free when you buy a license key. There are way too many possible technical issues that could happen with various tech stacks and server configurations that are not in my control. That's why I cannot offer technical support if you have problem with your self-hosted version.",
        },
        {
          question: "What permissions do I have with the self-host code?",
          answer: (0, o.jsxs)("ul", {
            className: "list-disc pl-4",
            children: [
              (0, o.jsx)("li", {
                children: "✅ You have access to the compiled code of the app.",
              }),
              (0, o.jsx)("li", {
                children:
                  "✅ You have permission to deploy and use the compiled code on your own server.",
              }),
              (0, o.jsx)("li", {
                children:
                  "❌ You do not have permissions to modify or redistribute the compiled code.",
              }),
              (0, o.jsx)("li", {
                children:
                  "❌ You do not have permissions to share or resell the compiled code.",
              }),
            ],
          }),
        },
      ];
      function l() {
        return (0, o.jsx)("div", {
          className: "",
          children: (0, o.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, o.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, o.jsx)("h2", {
                  className: "text-2xl font-bold leading-10 tracking-tight ",
                  children: "Frequently asked questions",
                }),
                (0, o.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: r.map((e) =>
                    (0, o.jsx)(
                      n.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (s) => {
                          let { open: t } = s;
                          return (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("dt", {
                                children: (0, o.jsxs)(n.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left ",
                                  children: [
                                    (0, o.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, o.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: t
                                        ? (0, o.jsx)(a, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, o.jsx)(i, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, o.jsx)(n.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, o.jsx)("p", {
                                  className:
                                    "text-base leading-7 text-gray-500",
                                  children: e.answer,
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      e.question
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    71598: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return l;
          },
        });
      var o = t(85893),
        n = t(51448),
        a = t(60686),
        i = t(89290),
        r = t(39590);
      function l() {
        return (0, o.jsxs)("div", {
          className: "min-h-screen",
          children: [
            (0, o.jsx)(n.Z, { title: "Contact" }),
            (0, o.jsx)("div", {
              className: "py-10",
              children: (0, o.jsxs)("main", {
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "hide-when-print my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                    children: (0, o.jsx)("a", {
                      href: "/",
                      className: "text-blue-500 hover:underline",
                      children: "Go back to webmind.app",
                    }),
                  }),
                  (0, o.jsx)("h1", {
                    className: "text-4xl font-bold text-center my-10",
                    children: "Contact",
                  }),
                  (0, o.jsxs)("section", {
                    className: "max-w-2xl mx-auto px-4",
                    children: [
                      (0, o.jsxs)("div", {
                        children: [
                          (0, o.jsxs)("div", {
                            className: "my-4",
                            children: [
                              "Hello! webmind.app is built and maintained by me,",
                              " ",
                              (0, o.jsx)("b", {
                                children: (0, o.jsx)("a", {
                                  className: "text-blue-500 hover:underline",
                                  href: "https://twitter.com/tdinh_me",
                                  children: "Tony Dinh",
                                }),
                              }),
                              " ",
                              "\uD83D\uDC4B",
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "my-4",
                            children: (0, o.jsx)("a", {
                              className: "text-blue-500 hover:underline",
                              href: "/terms",
                              children: (0, o.jsx)("b", {
                                children: "Terms of Service",
                              }),
                            }),
                          }),
                          (0, o.jsx)("div", {
                            className: "my-4",
                            children: (0, o.jsx)("a", {
                              className: "text-blue-500 hover:underline",
                              href: "/privacy",
                              children: (0, o.jsx)("b", {
                                children: "Privacy Policy",
                              }),
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            className: "my-4",
                            children: [
                              (0, o.jsx)("b", {
                                children: "For invoice/tax inquiries:",
                              }),
                              (0, o.jsx)("ul", {
                                children: (0, o.jsxs)("li", {
                                  children: [
                                    "Please email",
                                    " ",
                                    (0, o.jsx)("a", {
                                      className:
                                        "text-blue-500 hover:underline",
                                      href: "mailto:hello@lemonsqueezy.com",
                                      children: "hello@lemonsqueezy.com",
                                    }),
                                    " ",
                                    "with your receipt number.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: "my-4",
                            children: [
                              (0, o.jsx)("b", {
                                children: "For legal purposes",
                              }),
                              ":",
                              (0, o.jsxs)("ul", {
                                children: [
                                  (0, o.jsx)("li", {
                                    children: "Company name: Devuap LLC",
                                  }),
                                  (0, o.jsx)("li", {
                                    children:
                                      "Address: Ste 1200, 1309 Coffeen Avenue, Sheridan, WY, Sheridan, US, 82801",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsx)("hr", { className: "my-10" }),
                      (0, o.jsxs)("div", {
                        className: "my-2",
                        children: [
                          (0, o.jsx)("b", {
                            children: "Send feedback/suggestions",
                          }),
                          ": ",
                          (0, o.jsx)("br", {}),
                          (0, o.jsx)("a", {
                            href: "mailto:feedback@webmind.app",
                            className: "text-blue-600 hover:underline",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "feedback@webmind.app",
                          }),
                          " ",
                          (0, o.jsx)("br", {}),
                          (0, o.jsx)("div", {
                            className: "text-xs",
                            children:
                              "You will not receive a response from this address, but we will read and take note of all the feedback/suggestions we receive.",
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "my-2",
                        children: [
                          (0, o.jsx)("b", { children: "Customer Support" }),
                          ": ",
                          (0, o.jsx)("br", {}),
                          (0, o.jsx)("a", {
                            href: "mailto:support@webmind.app",
                            className: "text-blue-600 hover:underline",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "support@webmind.app",
                          }),
                          " ",
                          (0, o.jsx)("br", {}),
                          (0, o.jsx)("div", {
                            className: "text-xs",
                            children:
                              "Expected response time: 1-2 business days",
                          }),
                        ],
                      }),
                      (0, o.jsx)("hr", { className: "my-10" }),
                      (0, o.jsx)("h2", {
                        className: "text-3xl font-bold text-center my-10",
                        children: "General FAQs",
                      }),
                      (0, o.jsx)(r.Z, {}),
                      (0, o.jsx)("hr", { className: "my-10" }),
                      (0, o.jsx)("h2", {
                        className: "text-3xl font-bold text-center my-10",
                        children: "Self-host FAQs",
                      }),
                      (0, o.jsx)(i.Z, {}),
                      (0, o.jsx)("hr", { className: "my-10" }),
                      (0, o.jsx)("h2", {
                        className: "text-3xl font-bold text-center my-10",
                        children: "Custom Deployment FAQs",
                      }),
                      (0, o.jsx)(a.Z, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [982, 5, 774, 888, 179], function () {
      return e((e.s = 48105));
    }),
      (_N_E = e.O());
  },
]);
