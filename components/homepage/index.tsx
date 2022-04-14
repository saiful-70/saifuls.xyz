import { Box, Heading, Button } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import RecentProject from '@/components/homepage/recent-project-card';
import Footer from '@/components/footer';
import projects from '@/data/projects';
import router from 'next/router';

const Profile = () => {
  const showProjectsPage = () => {
    router.push('/projects');
  };

  const loadRecentProjectsAndBlogs = () => {
    const filteredProjects = projects.slice(0, 3);

    return (
      <Box display="flex" flexDirection="column" mt="1rem">
        <Box>
          <Heading as="h2" size="md" ml="">
            Projects
          </Heading>
        </Box>
        {filteredProjects.map((project, index) => (
          <Box m="0.5rem" key={index}>
            <RecentProject project={project} />
          </Box>
        ))}
        <Button variant="ghost" onClick={showProjectsPage} colorScheme="brand">
          See all projects
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Box
        minHeight="90vh"
        id="profile"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Box
          textAlign="center"
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center">
          <Box fontSize={['2rem', '2.5rem', '3rem', '3rem']} fontWeight="bold">
            <Box display="inline-flex" position="relative" overflow="hidden">
              <Box display="inline-flex" flexDirection="column">
                <Box>Front-end</Box>
              </Box>
            </Box>
            <Box display="inline-block" ml="10px">
              Developer &nbsp;
              <Box as="span">
                &lt;
                <Box as="span" className="dash">
                  _
                </Box>
                /&gt;
              </Box>
            </Box>
          </Box>
          <Box fontSize={['1rem', '1.6rem', '1.8rem', '1.8rem']} mx="1rem">
            <p>I code beautifully simple things and I love what I do</p>
          </Box>
          <Box>
            <Button
              variant="ghost"
              colorScheme="brand"
              onClick={() => (window.location.href = 'https://github.com/knowankit')}></Button>
          </Box>
        </Box>
        {loadRecentProjectsAndBlogs()}
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
