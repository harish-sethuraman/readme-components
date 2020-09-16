const links = (data = {}) => {
  const { stackoverflowid, company, repoowner, reponame } = data;
  return {
    api: {
      quotes: "https://type.fit/api/quotes",
      stackoverflow: `https://api.stackexchange.com/2.2/users/${stackoverflowid}?order=desc&sort=reputation&site=stackoverflow&filter=!b6Aub2or8vkePb`,
      company: `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`,
      github: `https://api.github.com/repos/${repoowner}/${reponame}/stats/contributors`,
    },
    assets: {
      repoicon: "https://static.thenounproject.com/png/368566-200.png",
      githubicon: "https://image.flaticon.com/icons/png/512/25/25231.png",
    },
  };
};

module.exports = links;
