import {
	Box,
	Container,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	ThemeProvider,
	createTheme,
	CssBaseline,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CompareIcon from "@mui/icons-material/Compare";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import SecurityIcon from "@mui/icons-material/Security";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// Import screenshots
import homeSidewaysScreen from "./assets/home-sideways.png";
import marketsScreen from "./assets/markets.png";
import symbolDetailsScreenSideways from "./assets/symbol-details-sideways.png";
import analysisScreen from "./assets/analysis-details.png";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0090FF",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ bgcolor: "primary.main", margin: 0, minWidth: "100%" }}>
				{/* Hero Section */}
				<Container maxWidth="lg" sx={{ py: 12, color: "white" }}>
					<Grid container spacing={4} alignItems="center">
						<Grid item xs={12} md={6}>
							<Typography variant="h2" component="h1" gutterBottom>
								Track Your Investments with Finapp
							</Typography>
							<Typography variant="h5" sx={{ mb: 4 }}>
								Your all-in-one solution for stock tracking, portfolio management, and
								investment analysis.
							</Typography>
							<Button
								variant="contained"
								size="large"
								sx={{
									bgcolor: "white",
									color: "primary.main",
									"&:hover": {
										bgcolor: "grey.100",
									},
								}}
								href="https://apps.apple.com/app/finapp"
								target="_blank"
							>
								Get Started
							</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box
								component="img"
								src={marketsScreen}
								alt="Finapp Home Screen"
								sx={{
									width: "100%",
									maxWidth: 600,
									height: "auto",
									margin: "0 auto",
									display: "block",
								}}
							/>
						</Grid>
					</Grid>
				</Container>

				{/* Features Section */}
				<Box sx={{ bgcolor: "#fff" }}>
					<Container maxWidth="lg" sx={{ py: 8 }}>
						<Typography variant="h3" component="h2" textAlign="center" gutterBottom>
							Features
						</Typography>
						<Grid container spacing={6} sx={{ mt: 4 }}>
							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										overflow: "hidden",
									}}
								>
									<CardContent
										sx={{
											textAlign: "center",
											p: 4,
											display: "flex",
											flexDirection: "column",
											height: "100%",
										}}
									>
										<Box sx={{ mb: 4 }}>
											<ShowChartIcon
												sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
											/>
											<Typography variant="h5" gutterBottom>
												Real-time Stock Updates
											</Typography>
											<Typography color="text.secondary" sx={{ mb: 3 }}>
												Stay informed with live stock prices and market trends
											</Typography>
										</Box>
										<Box
											sx={{
												height: 400,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												px: 2,
											}}
										>
											<Box
												component="img"
												src={homeSidewaysScreen}
												alt="Real-time Markets"
												sx={{
													width: "100%",
													height: "100%",
													objectFit: "contain",
													borderRadius: 1,
												}}
											/>
										</Box>
									</CardContent>
								</Card>
							</Grid>

							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										overflow: "hidden",
									}}
								>
									<CardContent
										sx={{
											textAlign: "center",
											p: 4,
											display: "flex",
											flexDirection: "column",
											height: "100%",
										}}
									>
										<Box sx={{ mb: 4 }}>
											<CompareIcon
												sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
											/>
											<Typography variant="h5" gutterBottom>
												Investment Comparison
											</Typography>
											<Typography color="text.secondary" sx={{ mb: 3 }}>
												Compare your stock performance with other investment types
											</Typography>
										</Box>
										<Box
											sx={{
												height: 400,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												px: 2,
											}}
										>
											<Box
												component="img"
												src={analysisScreen}
												alt="Investment Analysis"
												sx={{
													width: "100%",
													height: "100%",
													objectFit: "contain",
													borderRadius: 1,
												}}
											/>
										</Box>
									</CardContent>
								</Card>
							</Grid>

							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										overflow: "hidden",
									}}
								>
									<CardContent
										sx={{
											textAlign: "center",
											p: 4,
											display: "flex",
											flexDirection: "column",
											height: "100%",
										}}
									>
										<Box sx={{ mb: 4 }}>
											<AccountBalanceWalletIcon
												sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
											/>
											<Typography variant="h5" gutterBottom>
												Portfolio Management
											</Typography>
											<Typography color="text.secondary" sx={{ mb: 3 }}>
												Create and manage multiple investment portfolios
											</Typography>
										</Box>
										<Box
											sx={{
												height: 400,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												px: 2,
											}}
										>
											<Box
												component="img"
												src={symbolDetailsScreenSideways}
												alt="Portfolio Management"
												sx={{
													width: "100%",
													height: "100%",
													objectFit: "contain",
													borderRadius: 1,
												}}
											/>
										</Box>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Box>

				{/* Benefits Section */}
				<Box sx={{ bgcolor: "#f8fafc" }}>
					<Container maxWidth="lg" sx={{ py: 8 }}>
						<Typography variant="h3" component="h2" textAlign="center" gutterBottom>
							Benefits
						</Typography>
						<Grid container spacing={6} sx={{ mt: 4 }}>
							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										p: 4,
									}}
								>
									<TouchAppIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
									<Typography variant="h5" gutterBottom>
										Easy to Use
									</Typography>
									<Typography color="text.secondary">
										Intuitive interface designed for both beginners and experienced
										investors
									</Typography>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										p: 4,
									}}
								>
									<SecurityIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
									<Typography variant="h5" gutterBottom>
										Data Security
									</Typography>
									<Typography color="text.secondary">
										Your financial data is protected with bank-level security
									</Typography>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
										borderRadius: 8,
										boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
										transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
										"&:hover": {
											transform: "translateY(-8px)",
											boxShadow: "0 12px 48px rgba(0,0,0,0.16)",
										},
										p: 4,
									}}
								>
									<AutoGraphIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
									<Typography variant="h5" gutterBottom>
										Smart Insights
									</Typography>
									<Typography color="text.secondary">
										Get personalized investment recommendations based on your goals
									</Typography>
								</Card>
							</Grid>
						</Grid>
					</Container>
				</Box>

				{/* FAQ Section */}
				<Box sx={{ bgcolor: "#fff" }}>
					<Container maxWidth="lg" sx={{ py: 8 }}>
						<Typography variant="h3" component="h2" textAlign="center" gutterBottom>
							Frequently Asked Questions
						</Typography>
						<Box sx={{ mt: 4 }}>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant="h6">How do I get started?</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Download the app from your device's app store, create an account, and
										start tracking your investments right away.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant="h6">Is my data secure?</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Yes, we use bank-level encryption to protect your data and never share
										your information with third parties.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant="h6">What markets do you cover?</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										We cover major stock markets worldwide, including NYSE, NASDAQ, and
										international exchanges.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</Box>
					</Container>
				</Box>

				{/* Contact Section */}
				<Box sx={{ bgcolor: "#f8fafc" }}>
					<Container maxWidth="lg" sx={{ py: 8 }}>
						<Typography variant="h3" component="h2" textAlign="center" gutterBottom>
							Contact Us
						</Typography>
						<Box sx={{ mt: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}>
							<Typography color="text.secondary" sx={{ mb: 4 }}>
								Have a question or feedback? We'd love to hear from you.
							</Typography>
							<Button
								variant="contained"
								color="primary"
								size="large"
								href="mailto:info@finapp.website?subject=Inquiry%20about%20Finapp&body=Hello%20Finapp%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about..."
								sx={{ px: 6, py: 1.5 }}
							>
								Send us an email
							</Button>
						</Box>
					</Container>
				</Box>

				{/* Footer */}
				<Box sx={{ bgcolor: "#fff", py: 3 }}>
					<Container maxWidth="lg">
						<Typography variant="body2" color="text.secondary" align="center">
							© {new Date().getFullYear()} Finapp. All rights reserved.
						</Typography>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
