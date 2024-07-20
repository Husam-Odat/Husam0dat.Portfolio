const portfolioItems = [
    {
        imgSrc: "assets/images/portfolio/portfolio-05.jpg",
        altText: "Personal Portfolio Images",
        category: "Figma",
        likes: 650,
        title: "Mobile app landing design & Services33"
    }
    // Add more items as needed
];
function renderPortfolioItems(items) {
    const portfolioContainer = document.querySelector('.rn-portfolio-slick');

    items.forEach(item => {
        const portfolioDiv = document.createElement('div');
        portfolioDiv.classList.add('rn-portfolio');
        // portfolioDiv.setAttribute('data-toggle', 'modal');
        // portfolioDiv.setAttribute('data-target', '#exampleModalCenter3');

        portfolioDiv.innerHTML = `        
                                <div class="rn-portfolio" data-toggle="modal" data-target="#exampleModalCenter3">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <a href="javascript:void(0)">
                                                <img src="assets/images/portfolio/portfolio-05.jpg"
                                                    alt="Personal Portfolio Images">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="category-info">
                                                <div class="category-list">
                                                    <a href="javascript:void(0)">Figma</a>
                                                </div>
                                                <div class="meta">
                                                    <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>
                                                        650</span>
                                                </div>
                                            </div>
                                            <h4 class="title"><a href="javascript:void(0)">Mobile app landing design &
                                                    Services33<i class="feather-arrow-up-right"></i></a></h4>
                                        </div>
                                    </div>
                                </div>                          
        `;

        portfolioContainer.appendChild(portfolioDiv);
    });
}

// Call the function with your portfolio items
renderPortfolioItems(portfolioItems);
