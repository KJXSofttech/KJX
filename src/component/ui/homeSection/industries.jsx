import styled from "styled-components";

const Industries = () => {
    // Sample data for demonstration
    const industries = [
        { name: 'Banking & Finance', image: 'https://i.ibb.co/b5bfBxF/mobile-banking.png' },
        { name: 'HealthCare', image: 'https://medical3danimationcompany.com/wp-content/uploads/medical-3d-animation-logo-medical-3d-animation-company-austin-visuals.png' },
        { name: 'Government', image: 'https://www.hranker.com/blog/wp-content/uploads/2021/03/government-of-india.jpg' },
        { name: 'Travel & Hospitality', image: 'https://cdn2.iconfinder.com/data/icons/travel-ecommerce-lineart/48/hotel_motel_fly_transportation-512.png' },
        { name: 'Automotive', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUSDxAWEBUXFRIVFRIVEBYXFRUXFxUXFhUWFhgYHSggGB0lGxcVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ0NFSsZFRkrKystNzcrKystLTcrLSsrKysrNysrKy0rNysrKysrKysrNysrKysrKysrKysrKysrK//AABEIAMIBBAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABIEAACAQIDBAcEBgUKBgMAAAABAgADEQQSIQUGMUETIlFhcYGhBzKRsRQzQlLB0SNygpKyFUNEU2KTorPS8DR0g6Ph8RYkJf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBE1nePffCYMmm9an0nNTVVQv63PyA+E1nEb4tWAP0rIhFx0VNwpB4EPlJPiDA6ZPCw7ZyaptOiwJq4tiBqTUerYDtJYSmnX2e39Nwp8atvmJYOrNi6Y0NRR4uJ59Mp/1ifvj85zGlRwbGyYjDP4V6Xpci8nUt3Uf3eiPgyn5XiDoq1AeBB85VOcNupb+bXytPBsOonudIn6lRh/CYg6RE5l9OxFH3cXVFuOZw9u2/SAzyj7SlTR8VhqneaiA/FWt6RB06JqWx9+aNZbva39ZScVKf8Ah1Hhr4zLNvPggQGxlBCeAeuiE+AYgyDLxLGHxdOprTqJU/VcN8jL8BERAREQEREBERAREQEREBERAREQERON7x+0nG/S6lLC5aK0qjplKKS4psQzVGf3VIF9LWHPnA7E7AAkmwAuSToAOJM5LvV7SKmLrfQtjAvc5GxC8XOt1ongAOJqHle3bNa3+3/qbVLYfCk0cGDZmvZ8QRpr92nflz59gzu5WN2fstOq30vEsozmit6dJTqEDtZct9dCSxF7WAsGb3Q9lWFoL0mPppi6zatnuyKSbm4b6w34s3prN2FDD09KdGn4LTUfhNC2hv8A1WBKUlQDW7sW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' },
        { name: 'Media & Entertainment', image: 'https://w7.pngwing.com/pngs/535/26/png-transparent-black-sony-hdv-video-recorder-digital-video-video-camera-video-camera-lens-camera-lens-photography.png' },
        { name: 'Real Estate', image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-58774,resizemode-75,msid-109491011/markets/stocks/news/staying-with-a-select-few-is-better-option-4-real-estate-stocks-with-upside-potential-of-up-to-41-.jpg' },
        { name: 'Investment', image: 'https://cdn.zeebiz.com/sites/default/files/2023/09/06/259487-image-1200x900-2023-09-06t054205278.jpg' },
        { name: 'E-Learning', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzIWZv9_zoq1IzHxMkwzLDYCVRrZhXn4rdw&s' },
        { name: 'Transportation', image: 'https://media.istockphoto.com/id/174870355/sv/foto/visual-representation-of-transportation-modes.jpg?s=612x612&w=0&k=20&c=pso7HZQ_ETetWw5FkcfRNu5-1LzMiryoRtAlLMixH80=' },
        { name: 'E-Commerce', image: 'https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg' },
        { name: 'Technical Services', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOLKvijk9w53U8AttVMfva-4Gh20aGm4F1Y43vklsMEzqTjvEog7MSxZbStbAigooW7Q&usqp=CAU' },
    ];

    return (
        <StyledMain>
            <Section>
                <Wrapper>
                    <Title>Industries We Serve</Title>
                    <Holder>
                        <Text>
                            <H1>Explore Our Expertise Across Various Sectors</H1>
                        </Text>
                        <CardHolder>
                            {industries.map((industry, index) => (
                                <CardContainer key={index} className="transform transition duration-500 hover:scale-110">
                                    <Card>
                                        <ColoredBox style={{ backgroundImage: `url(${industry.image})` }} />
                                        <CardContent>
                                            <p>{industry.name}</p>
                                        </CardContent>
                                    </Card>
                                </CardContainer>
                            ))}
                        </CardHolder>
                    </Holder>
                </Wrapper>
            </Section>
        </StyledMain>
    );
};

export default Industries;

const StyledMain = styled.main`
    background: linear-gradient(to right, #f5f5f5, #e0e0e0); /* Light gray gradient for a clean look */
    opacity: 0.95;
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: #333; /* Dark gray text color for contrast */
`;

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 30px;
    margin: 0;
    color: #444; /* Medium gray color for the title */

    @media (min-width: 1024px) {
        font-size: 50px;
    }
`;

const Holder = styled.div`
    width: 100%;
    align-self: center;

    @media (min-width: 1024px) {
        width: 95%;
    }
`;

const Text = styled.div``;

const H1 = styled.h1`
    margin: 0;
    font-size: 12px;
    color: #666; /* Slightly lighter gray for subtitles */

    @media (min-width: 1024px) {
        font-size: 25px;
    }
`;

const CardHolder = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 990px) {
        width: 30%;
    }
`;

const Card = styled.div`
    width: 90%;
    height: 60px;
    border: 2px solid #9e909e; /* Medium gray border for a subtle touch */
    border-radius: 8px;
    background-color: #ffffff; /* White background for a clean look */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px; /* Soft shadow for a modern appearance */
`;

const ColoredBox = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 8px;
    border: 4.5px solid #9e9e9e; /* Medium gray border */
    left: 15px;
    background-size: cover;
    background-position: center;

    @media (min-width: 766px) {
        left: 0;
    }
`;

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    p {
        width: 70%;
        font-weight: bold;
        color: #333; /* Dark gray text color for readability */
        
        @media (min-width: 766px) {
            width: 80%;
        }

        @media (min-width: 990px) {
            width: 90%;
            display: flex;
            margin-left: 30px;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;
