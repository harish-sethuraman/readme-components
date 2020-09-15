const links = (data = {}) => {
  const { stackoverflowid, company, repoowner, reponame } = data;
  return {
    quotesapi: "https://type.fit/api/quotes",
    stackoverflowapi: `https://api.stackexchange.com/2.2/users/${stackoverflowid}?order=desc&sort=reputation&site=stackoverflow&filter=!b6Aub2or8vkePb`,
    company: `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`,
    githubapi: `https://api.github.com/repos/${repoowner}/${reponame}/stats/contributors`,
  };
};

module.exports = links;
