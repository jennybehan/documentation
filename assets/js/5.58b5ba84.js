(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(e,t,s){e.exports=s.p+"assets/img/belgium.c61ffb68.png"},353:function(e,t,s){e.exports=s.p+"assets/img/vogli3.6055588e.png"},354:function(e,t,s){e.exports=s.p+"assets/img/new_road.43124246.png"},355:function(e,t,s){e.exports=s.p+"assets/img/knight.94779a6c.png"},401:function(e,t,s){"use strict";s.r(t);var a=s(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"relevancy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevancy"}},[e._v("#")]),e._v(" Relevancy")]),e._v(" "),a("p",[e._v("Search responses are sorted according to a set of consecutive rules called "),a("strong",[e._v("ranking rules")]),e._v(". When a search query is made, MeiliSearch uses a "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/bucket_sort.html"}},[e._v("bucket sort")]),e._v(" to rank documents. Each rule is applied to all documents that are considered equal according to the previous rule to break the tie.")],1),e._v(" "),a("p",[e._v("Ranking rules are "),a("strong",[e._v("built-in rules applied to the search results")]),e._v(" in order to improve their relevancy. To benefit from the ranking rules and make them meet your dataset and needs, it is important to understand how each of them works and how to create new ones.")]),e._v(" "),a("p",[e._v("For a more in-depth explanation of the algorithm and the default ranking rules, "),a("a",{attrs:{href:"https://github.com/meilisearch/MeiliSearch/issues/358",target:"_blank",rel:"noopener noreferrer"}},[e._v("see this issue"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranking-rules"}},[e._v("#")]),e._v(" Ranking rules")]),e._v(" "),a("p",[e._v("Ranking rules determine which documents are returned upon a search query. Each of them has a special use in finding the right results for a given search query.")]),e._v(" "),a("p",[e._v("The ranking rules are "),a("strong",[e._v("customizable")]),e._v(" which means "),a("strong",[e._v("existing rules can be deleted and new ones can be added")]),e._v(".")]),e._v(" "),a("p",[e._v("The order in which they are applied has a significant impact on the search results. The first rules being the most impactful and the last one the least. The default order has been chosen because it meet most standard needs. "),a("strong",[e._v("This order can be changed in the settings")]),e._v(".")]),e._v(" "),a("p",[e._v("By default, ranking rules are executed in the following order:")]),e._v(" "),a("p",[a("strong",[e._v("1. Typo")]),a("br"),e._v("\nResults are sorted by "),a("strong",[e._v("increasing number of typos")]),e._v(": find documents that match query terms with fewer typos first.")]),e._v(" "),a("p",[a("strong",[e._v("2. Words")]),a("br"),e._v("\nResults are sorted by "),a("strong",[e._v("decreasing number of matched query terms")]),e._v(" in each matching document: find documents that contain more occurrences of the query terms first.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("It is now mandatory that all query terms are present in the returned documents. This rule does not impact search results yet. "),a("Badge",{attrs:{text:"soon",type:"warn"}})],1)]),e._v(" "),a("p",[a("strong",[e._v("3. Proximity")]),a("br"),e._v("\nResults are sorted by "),a("strong",[e._v("increasing distance between matched query terms")]),e._v(": find documents that contain more query terms found close together (close proximity between two query terms) and appearing in the original order specified in the query string first.")]),e._v(" "),a("p",[a("strong",[e._v("4. Attribute")]),a("br"),e._v("\nResults are sorted according to "),a("strong",[a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#importance-of-the-attributes"}},[e._v("the order of importance of the attributes")])],1),e._v(": find documents that contain query terms in more important attributes first.")]),e._v(" "),a("p",[a("strong",[e._v("5. Words Position")]),a("br"),e._v("\nResults are sorted by "),a("strong",[e._v("the position of the query words in the attributes")]),e._v(": find documents that contain query terms earlier in their attributes first.")]),e._v(" "),a("p",[a("strong",[e._v("6. Exactness")]),a("br"),e._v("\nResults are sorted by "),a("strong",[e._v("the similarity of the matched words with the query words")]),e._v(": find documents that contain exactly the same terms as the ones queried first.")]),e._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Typo"}},[a("p",[a("img",{attrs:{src:s(353),alt:"Image from alias"}})]),e._v(" "),a("h3",{attrs:{id:"typo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typo"}},[e._v("#")]),e._v(" Typo")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("vogli")]),e._v(": 0 typo")]),e._v(" "),a("li",[a("code",[e._v("volli")]),e._v(": 1 typo")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("typo")]),e._v(" rule sorts the results by increasing number of typos on matched query words.")])]),e._v(" "),a("Tab",{attrs:{label:"Proximity"}},[a("p",[a("img",{attrs:{src:s(354),alt:"Image from alias"}})]),e._v(" "),a("h3",{attrs:{id:"proximity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proximity"}},[e._v("#")]),e._v(" Proximity")]),e._v(" "),a("p",[e._v("The reason why "),a("code",[e._v("Creature")]),e._v(" is listed before "),a("code",[e._v("Mississippi Grind")]),e._v(" is because of the "),a("code",[e._v("proximity")]),e._v(" rule."),a("br"),e._v("\nThe smallest "),a("strong",[e._v("distance")]),e._v(" between the matching words in "),a("code",[e._v("creature")]),e._v(" is smaller than the smallest "),a("strong",[e._v("distance")]),e._v(" between the matching words in "),a("code",[e._v("Mississippi Grind")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("proximity")]),e._v(" rule sorts the results by increasing distance between matched query terms.")])]),e._v(" "),a("Tab",{attrs:{label:"Attribute"}},[a("p",[a("img",{attrs:{src:s(316),alt:"Image from alias"}})]),e._v(" "),a("h3",{attrs:{id:"attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attribute"}},[e._v("#")]),e._v(" Attribute")]),e._v(" "),a("p",[a("code",[e._v("If It's Tuesday, This must be Belgium")]),e._v(" is the first document because the matched word "),a("code",[e._v("Belgium")]),e._v(", is found in the "),a("code",[e._v("title")]),e._v(" attribute and not the "),a("code",[e._v("description")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("attribute")]),e._v(" rule sorts the results by "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#importance-of-the-attributes"}},[e._v("attribute importance")]),e._v(".")],1)]),e._v(" "),a("Tab",{attrs:{label:"Words position"}},[a("p",[a("img",{attrs:{src:s(316),alt:"Image from alias"}})]),e._v(" "),a("h3",{attrs:{id:"word-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#word-position"}},[e._v("#")]),e._v(" Word position")]),e._v(" "),a("p",[a("code",[e._v("Gangsta")]),e._v(" appears before "),a("code",[e._v("Dunkirk")]),e._v(" because "),a("code",[e._v("Belgium")]),e._v(" appears sooner in the attribute.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("word position")]),e._v(" rule sorts the results by increasing matching word's index number.")])]),e._v(" "),a("Tab",{attrs:{label:"Exactness"}},[a("p",[a("img",{attrs:{src:s(355),alt:"Image from alias"}})]),e._v(" "),a("h3",{attrs:{id:"exactness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exactness"}},[e._v("#")]),e._v(" Exactness")]),e._v(" "),a("p",[a("code",[e._v("Knight Moves")]),e._v(" is displayed before "),a("code",[e._v("Knights of Badassdom")]),e._v(". "),a("code",[e._v("Knight")]),e._v(" is exactly the same as the search query "),a("code",[e._v("Knight")]),e._v(" whereas there is a letter of difference between "),a("code",[e._v("Knights")]),e._v(" and the search query "),a("code",[e._v("Knight")]),e._v(".")])])],1),e._v(" "),a("h2",{attrs:{id:"order-of-the-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-of-the-rules"}},[e._v("#")]),e._v(" Order of the rules")]),e._v(" "),a("p",[e._v("By default, the built-in rules are executed in the following order to meet most standard needs.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"typo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"words"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"proximity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"attribute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordsPosition"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exactness"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("Depending on your needs, you might want to change this order of importance. To do so, you can use the "),a("RouterLink",{attrs:{to:"/references/ranking_rules.html#update-ranking-rules"}},[e._v("settings route")]),e._v(" of your index.")],1),e._v(" "),a("h2",{attrs:{id:"adding-your-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-your-rules"}},[e._v("#")]),e._v(" Adding your rules")]),e._v(" "),a("p",[e._v("New rules can be added to the existing list at any time and placed anywhere in the sequence.")]),e._v(" "),a("p",[e._v("A custom rule allows you to create an ascending or descending sorting rule on a given attribute.")]),e._v(" "),a("p",[e._v("To add your own ranking rule, you have to communicate either "),a("code",[e._v("asc")]),e._v(" for ascending order or "),a("code",[e._v("desc")]),e._v(" for descending order followed by the field name between round brackets.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("To apply an "),a("strong",[e._v("ascending sorting")]),e._v(" (results sorted by increasing value of the attribute): "),a("code",[e._v("asc(attribute_name)")])])]),e._v(" "),a("li",[a("p",[e._v("To apply a "),a("strong",[e._v("descending sorting")]),e._v(" (results sorted by decreasing value of the attribute): "),a("code",[e._v("desc(attribute_name)")])])])]),e._v(" "),a("p",[e._v("Add this rule to the existing list of ranking rules using the "),a("RouterLink",{attrs:{to:"/references/ranking_rules.html#update-ranking-rules"}},[e._v("settings route")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Let's say you have a movie dataset. The documents contain the fields "),a("code",[e._v("release_date")]),e._v(" with a timestamp as value, and "),a("code",[e._v("movie_ranking")]),e._v(" an integer that represents its ranking.")]),e._v(" "),a("p",[e._v("The following example will create a rule that makes older movies more relevant than more recent ones. A movie released in 1999 will appear before a movie released in 2020.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("asc(release_date)\n")])])]),a("p",[e._v("The following example will create a rule that makes movies with a good rank more relevant than movies with a lower rank. Movies with a higher ranking will appear first.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("desc(movie_ranking)\n")])])]),a("p",[e._v("To add a rule to the existing ranking rule, you have to add the rule to the existing ordered rules array using the "),a("RouterLink",{attrs:{to:"/references/ranking_rules.html#update-ranking-rules"}},[e._v("settings route")]),e._v(",")],1),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"typo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"attribute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"proximity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"words"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordsPosition"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exactness"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"asc(release_date)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"desc(movie_ranking)"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h2",{attrs:{id:"importance-of-the-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importance-of-the-attributes"}},[e._v("#")]),e._v(" Importance of the attributes")]),e._v(" "),a("p",[e._v("In a dataset, some fields are more relevant to the search than others. A "),a("code",[e._v("title")]),e._v(", for example, has a value more meaningful to a movie search than its "),a("code",[e._v("description")]),e._v(" or its "),a("code",[e._v("director")]),e._v(" name.")]),e._v(" "),a("p",[e._v("By default, the order of importance of the attributes is based on their order of appearance in the first document added. Then, each new attribute found in new documents will be added at the end of this ordered list.")]),e._v(" "),a("p",[e._v("If you wish to specify the order of the attributes you can either define them in the settings or set the correct order in the first document indexed.")]),e._v(" "),a("h3",{attrs:{id:"changing-the-order-of-the-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-order-of-the-attributes"}},[e._v("#")]),e._v(" Changing the order of the attributes")]),e._v(" "),a("p",[e._v("You may want to change the order once the documents have been ingested. This is still very possible using the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/field_properties.html#searchable-fields"}},[e._v("searchable attributes list")]),e._v(".")],1),e._v(" "),a("p",[e._v("Whenever a document is added to MeiliSearch, all new attributes found in it are automatically added to two lists:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("The "),a("RouterLink",{attrs:{to:"/references/searchable_attributes.html"}},[e._v("searchable attributes list")])],1),e._v(": Attributes of the fields in which to search for matching query words.")]),e._v(" "),a("li",[a("strong",[e._v("The "),a("RouterLink",{attrs:{to:"/references/displayed_attributes.html"}},[e._v("displayed attributes list")])],1),e._v(": Attributes of the fields displayed in documents.")])]),e._v(" "),a("p",[e._v("This searchable attributes list is "),a("strong",[e._v("ordered")]),e._v(", which means the order in which the attributes appear in the list determines their relevancy. Attributes are arranged from the most important attribute to the least important attribute.")]),e._v(" "),a("p",[e._v("Place the attributes in the desired order and send this updated list using the "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[e._v("settings routes")]),e._v(". Attributes will be re-ordered.")],1),e._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"director"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("If you take a look at the above order, the matching words found in "),a("code",[e._v("title")]),e._v(" will make the document more relevant than one with the same matching words found in "),a("code",[e._v("description")]),e._v(" or "),a("code",[e._v("director")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);